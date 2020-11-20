import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";
import { ListNavigatorItemContext } from "./list-navigator-item.context";
import { analyzeChanges } from "./list-navigator.component";





@Directive({
  selector: "list-navigator-item-outlet"
})
export class ListNavigatorItemOutlet<TItem> implements OnChanges
{
  constructor(private readonly _viewContainer: ViewContainerRef)
  {

  }





  @Input()
  public template: TemplateRef<ListNavigatorItemContext<TItem>>;



  @Input()
  public context: ListNavigatorItemContext<TItem>;






  public ngOnChanges(changes: SimpleChanges): void
  {
    
    //this._viewContainer.createEmbeddedView(changes['template'].currentValue, changes['context'].currentValue);

    const [, tmpl] = analyzeChanges(changes, 'template', () => this.template);
    const [, ctx] = analyzeChanges(changes, 'context', () => this.context);

    if (tmpl && ctx)
    {
      this._viewContainer.createEmbeddedView(tmpl, ctx);
    }
  }


}
