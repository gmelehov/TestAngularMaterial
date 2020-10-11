import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';




@Component({
  selector: 'purchase-item-input',
  templateUrl: './purchase-item-input.component.html',
  styleUrls: ['./purchase-item-input.component.css']
})
export class PurchaseItemInputComponent
{
  constructor()
  {
    this.value = new PurchaseItem(0, '', 'RUR', 0, 20, '');
  }






  stateChanges = new Subject<void>();



  /** Модель */
  value: PurchaseItem;


  /** Внутренний индекс элемента в списке */
  @Input()
  get index(): number
  {
    return this.value.index;
  }
  set index(_index: number)
  {
    this.value.index = _index;
    this.stateChanges.next();
  }


  /** Наименование позиции */
  @Input()
  get name(): string
  {
    return this.value.name;
  }
  set name(_name: string)
  {
    this.value.name = _name;
    this.stateChanges.next();
    this.doDataChange();
  }


  /** Валюта */
  @Input()
  get currency(): string
  {
    return this.value.currency;
  }
  set currency(_currency: string)
  {
    this.value.currency = _currency;
    this.stateChanges.next();
    this.doDataChange();
  }


  /** Стоимость */
  @Input()
  get cost(): number
  {
    return this.value.cost;
  }
  set cost(_cost: number)
  {
    this.value.cost = _cost;
    this.stateChanges.next();
    this.doDataChange();
  }


  /** Ставка НДС */
  @Input()
  get vatRate(): number
  {
    return this.value.vatRate;
  }
  set vatRate(_vatRate: number)
  {
    this.value.vatRate = _vatRate;
    this.stateChanges.next();
    this.doDataChange();
  }


  /** Статья бюджета */
  @Input()
  get budgetItem(): string
  {
    return this.value.budgetItem;
  }
  set budgetItem(_budgetItem: string)
  {
    this.value.budgetItem = _budgetItem;
    this.stateChanges.next();
    this.doDataChange();
  }



  /** Список валют */
  currenciesList: string[] = [
    'RUR',
    'USD',
    'EUR',
    'GBP'
  ];






  @Output()
  newItemEvent = new EventEmitter<number>();

  @Output()
  removeItemEvent = new EventEmitter<number>();

  @Output()
  dataChangedEvent = new EventEmitter<PurchaseItem>();

  




  addNewItem(value: number)
  {
    this.newItemEvent.emit(value);
  }


  removeItem(value: number)
  {
    this.removeItemEvent.emit(value);
  }



  doDataChange()
  {
    this.dataChangedEvent.emit(this.value);
  }





}















export class PurchaseItem
{
  constructor(public index: number, public name: string, public currency: string, public cost: number, public vatRate: number, public budgetItem: string)
  {
    
  }
}
