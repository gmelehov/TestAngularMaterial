import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ListNavigatorComponent } from "./list-navigator.component";
import { ListNavigatorItem } from "./list-navigator-item.directive";
import { ListNavigatorItemOutlet } from "./list-navigator-item-outlet.directive";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';




@NgModule({
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatListModule],
  declarations: [ListNavigatorComponent, ListNavigatorItem, ListNavigatorItemOutlet],
  exports: [ListNavigatorComponent, ListNavigatorItem]
})
export class ListNavigatorModule
{

}
