import { Component, ContentChild, EventEmitter, Input, Output, SimpleChange, SimpleChanges, Type } from "@angular/core";
import { ListNavigatorItemContext } from "./list-navigator-item.context";
import { ListNavigatorItem } from "./list-navigator-item.directive";





export function analyzeChanges<T>(changes: SimpleChanges, propname: string, defValue: () => T): [boolean, T, T]
{
  //const regExp = new RegExp("_this\.(.+?);");
  //const match: RegExpExecArray = regExp.exec(defValue.toString());
  //if (match.length < 2)
  //{
  //  throw new Error("Could not find property name");
  //}
  //const propertyName = match[1];

  const simpleChange: SimpleChange = changes[propname];

  if (simpleChange != undefined)
  {
    return [true, <T>(simpleChange.currentValue), simpleChange.isFirstChange() ? undefined : simpleChange.previousValue];
  }
  return [false, defValue(), defValue()];
}







@Component({
  selector: 'list-navigator',
  templateUrl: 'list-navigator.component.html',
  styleUrls: ['list-navigator.style.css']
})
export class ListNavigatorComponent<TItem>
{


  private _currentOffset: number = 0;

  protected itemsToDisplay: ListNavigatorItemContext<TItem>[] = [];




  protected get prevEnabled(): boolean
  {
    return this._currentOffset - this.pageSize >= 0;
  }


  protected nextEnabled: boolean;



  @ContentChild(ListNavigatorItem, { static: false })
  protected templateOutlet: ListNavigatorItem<TItem>;







  @Input()
  public dataSource: (offset: number, pageSize: number) => TItem[];


  @Input()
  public pageSize: number = 5;


  @Input()
  public selectedItems: TItem[] = [];


  @Output()
  public readonly selectedItemsChange: EventEmitter<TItem[]> = new EventEmitter<TItem[]>();







  public ngAfterContentInit(): void
  {
    if (!this.templateOutlet)
    {
      console.error("'list-navigator' component has to contain 'list-navigator-item' template directive");
    } else if (!this.templateOutlet.templateRef)
    {
      console.error("Use '*' in front of 'list-navigator-item' or put 'list-navigator-item' as an attribute into <template> directive");
    }

    globalThis.LNAV = this;
  }






  public ngOnChanges(changes: SimpleChanges): void
  {
    const [dsChanged, dsValue] = analyzeChanges(changes, 'dataSource', () => this.dataSource);
    const [tplChanged, tplOutlet] = analyzeChanges(changes, 'templateOutlet', () => this.templateOutlet);
    const [selectedItemsChanged, selectedItems] = analyzeChanges(changes, 'selectedItems', () => this.selectedItems);

    if (dsChanged || tplChanged) 
    {
      this.itemsToDisplay = [];
      if (tplOutlet && tplOutlet.templateRef && dsValue)
      {
        this.onNext(0);
      }
    }

    if (selectedItemsChanged && this.itemsToDisplay && this.itemsToDisplay.length > 0)
    {
      this.itemsToDisplay.forEach(i => { i.selected = selectedItems.indexOf(i.$implicit) >= 0; });
    }
  }





  protected onPrev()
  {
    this._currentOffset -= this.pageSize;
    this.itemsToDisplay = this.getItemContexts(this._currentOffset, this.pageSize);
    this.nextEnabled = true;
  }





  protected onNext(forcedOffset?: number)
  {
    const newOffset = (forcedOffset === null || forcedOffset === undefined)
      ? this._currentOffset + this.pageSize
      : forcedOffset;

    const next = this.getItemContexts(newOffset, this.pageSize + 1);

    this.nextEnabled = false;

    if (next && next.length > 0)
    {
      this.nextEnabled = next.length === this.pageSize + 1;
      this.itemsToDisplay = next.slice(0, this.pageSize);
      this._currentOffset = newOffset;
    }
  }




  protected onSelectedChange(itemContext: ListNavigatorItemContext<TItem>, cbValue: boolean)
  {
    if (cbValue)
    {
      if (this.selectedItems.indexOf(itemContext.$implicit) < 0)
      {
        this.selectedItems = Object.assign([], this.selectedItems);
        this.selectedItems.push(itemContext.$implicit);
        this.selectedItemsChange.next(this.selectedItems);
      }
    }
    else
    {
      const idx = this.selectedItems.indexOf(itemContext.$implicit);

      if (idx >= 0)
      {
        this.selectedItems = Object.assign([], this.selectedItems);
        this.selectedItems.splice(idx, 1);
        this.selectedItemsChange.next(this.selectedItems);
      }
    }
    itemContext.selected = cbValue;
  }





  private getItemContexts(offset: number, pageSize: number): ListNavigatorItemContext<TItem>[]
  {
    return this
      .dataSource(offset, pageSize)
      .map(i => new ListNavigatorItemContext<TItem>(i, this.selectedItems.indexOf(i) >= 0));
  }









}
