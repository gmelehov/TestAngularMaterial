import { Component, Output, EventEmitter } from '@angular/core';
import { PurchaseItem } from '../purchase-item-input/purchase-item-input.component';




@Component({
  selector: 'purchase-items-list',
  templateUrl: './purchase-items-list.component.html',
  styleUrls: ['./purchase-items-list.component.css']
})
export class PurchaseItemsListComponent
{
  constructor()
  {
    this.initItems();
    globalThis.PLIST = this;
  }









  items: PurchaseItem[] = [];


  @Output()
  itemAddedEvent = new EventEmitter<PurchaseItem[]>();






  onItemAdded(value: PurchaseItem[])
  {
    this.itemAddedEvent.emit(value);
  }



  initItems()
  {
    if (this.getTotalItems() === 0)
    {
      let item = new PurchaseItem(0, '', 'RUR', 0, 20, '');
      this.items.push(item);
      setTimeout(() =>
      {
        this.onItemAdded(this.items);
      }, 0);
    }
  }



  addItem(newItemIndex: number)
  {
    let count = this.getTotalItems();
    setTimeout(() =>
    {
      let item = new PurchaseItem(count, '', 'RUR', 0, 20, '');
      this.items.push(item);
      this.recalculateIndices();
      this.onItemAdded(this.items);
    }, 0);
  }


  removeItem(index: number)
  {
    let count = this.getTotalItems();
    if (count > 1)
    {
      this.items.splice(index, 1);
      setTimeout(() =>
      {
        this.recalculateIndices();
        this.onItemAdded(this.items);
      }, 0);
    }
  }


  updateItem(item: PurchaseItem)
  {
    let index = item.index;
    let found = this.getItemByIndex(index);
    if (!!found)
    {
      found.name = item.name;
      found.cost = item.cost;
      found.currency = item.currency;
      found.vatRate = item.vatRate;
      found.budgetItem = item.budgetItem;
      setTimeout(() =>
      {
        this.onItemAdded(this.items);
      }, 0);
    }
  }


  recalculateIndices()
  {
    this.items.forEach((it, ind) => it.index = ind);
  }


  getTotalItems()
  {
    return this.items.length;
  }


  getItemByIndex(index: number)
  {
    return this.items.find(f => f.index === index);
  }







}
