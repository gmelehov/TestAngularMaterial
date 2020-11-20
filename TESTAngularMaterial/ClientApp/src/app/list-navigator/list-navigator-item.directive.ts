import { Directive, Optional, TemplateRef } from "@angular/core";
import { ListNavigatorItemContext } from "./list-navigator-item.context";





@Directive({
  selector: "[list-navigator-item]"
})
export class ListNavigatorItem<TItem>
{
  constructor(@Optional() public readonly templateRef: TemplateRef<ListNavigatorItemContext<TItem>>)
  {

  }



}
