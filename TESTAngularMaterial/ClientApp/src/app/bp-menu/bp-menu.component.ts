import { ChangeDetectionStrategy, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Component } from "@angular/core";
import { PolymorpheusContent } from "@tinkoff/ng-polymorpheus/types/content";





export interface IContextWithImplicit<T>
{
  readonly $implicit: T;
}

export interface IContextWithActive<T> extends IContextWithImplicit<T>
{
  readonly active: boolean;
}

export interface ICustomTab
{
  text: string;
  content?: PolymorpheusContent<never>;
}








@Component({
  selector: 'bp-menu',
  templateUrl: './bp-menu.template.html',
  styleUrls: ['./bp-menu.style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BPMenuComponent<T>
{
  constructor()
  {
    globalThis.BPM = this;
  }




  @Input()
  items: ReadonlyArray<T> = [];


  @Input()
  content: PolymorpheusContent<IContextWithActive<T>> = ({
    $implicit,
  }: IContextWithActive<T>) => String($implicit);


  @Input()
  emptyContent: PolymorpheusContent<never> = 'Nothing is found';


  @Output()
  readonly itemClicked = new EventEmitter<T>();



  private activeItem: T | null = null;


  isActive(item: T): boolean
  {
    return item === this.activeItem;
  }


  getContext($implicit: T): IContextWithActive<T>
  {
    return {
      $implicit,
      active: this.isActive($implicit),
    };
  }



  onMouseEnter(item: T)
  {
    this.activeItem = item;
    console.dir(item);
  }



  @HostListener('mouseleave')
  onMouseLeave()
  {
    this.activeItem = null;
  }
}
