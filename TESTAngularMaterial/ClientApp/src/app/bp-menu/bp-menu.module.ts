import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { BPMenuComponent } from './bp-menu.component';




@NgModule({
  imports: [CommonModule, PolymorpheusModule],
  declarations: [BPMenuComponent],
  exports: [BPMenuComponent],
})
export class BPMenuModule { }
