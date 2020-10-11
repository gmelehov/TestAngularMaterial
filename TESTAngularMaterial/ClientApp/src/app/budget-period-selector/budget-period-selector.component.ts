import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';





@Component({
  selector: 'budget-period-selector',
  templateUrl: './budget-period-selector.component.html',
  styleUrls: ['./budget-period-selector.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: BudgetPeriodSelectorComponent }]
})
export class BudgetPeriodSelectorComponent implements MatFormFieldControl<BudgetPeriod>
{
  constructor()
  {
    this.value = new BudgetPeriod();
  }




  stateChanges = new Subject<void>();
  placeholder: string;
  ngControl: NgControl = null;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean = true;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  id = `budget-period-selector-${BudgetPeriodSelectorComponent.nextId++}`;
  describedBy = '';
  controlType?: string = 'budget-period-selector';
  autofilled?: boolean;

  onChange = (_: any) => { };
  onTouched = () => { };


  setDescribedByIds(ids: string[]): void
  {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(event: MouseEvent): void
  {
    
  }












  value: BudgetPeriod;



  @Input()
  get month(): number
  {
    return this.value.month;
  }
  set month(val: number)
  {
    this.value.month = val;
    this.stateChanges.next();
    this.onMonthChanged(val);
  }



  @Input()
  get year(): number
  {
    return this.value.year;
  }
  set year(val: number)
  {
    this.value.year = val;
    this.stateChanges.next();
    this.onYearChanged(val);
  }



  @Output()
  monthChangedEvent = new EventEmitter<number>();

  @Output()
  yearChangedEvent = new EventEmitter<number>();




  monthsList: Month[] = [
    { value: 1, name: 'январь' },
    { value: 2, name: 'февраль' },
    { value: 3, name: 'март' },
    { value: 4, name: 'апрель' },
    { value: 5, name: 'май' },
    { value: 6, name: 'июнь' },
    { value: 7, name: 'июль' },
    { value: 8, name: 'август' },
    { value: 9, name: 'сентябрь' },
    { value: 10, name: 'октябрь' },
    { value: 11, name: 'ноябрь' },
    { value: 12, name: 'декабрь' },
  ];


  yearsList: number[] = [2020, 2021, 2022, 2023];





  getCurrentMonth()
  {
    let today = new Date(Date.now());
    let monthNum = today.getMonth() + 1;
    return this.monthsList.find(f => f.value === monthNum);
  }


  getCurrentYear()
  {
    let today = new Date(Date.now());
    return today.getFullYear();
  }






  onMonthChanged(value: number)
  {
    this.monthChangedEvent.emit(value);
  }


  onYearChanged(value: number)
  {
    this.yearChangedEvent.emit(value);
  }






  static nextId = 0;

}








export interface Month
{
  value: number;
  name: string;
}











export class BudgetPeriod
{
  constructor(public month?: number, public year?: number)
  {
    this.month = month || this.getCurrentMonth().value;
    this.year = year || this.getCurrentYear();
  }






  monthsList: Month[] = [
    { value: 1, name: 'январь' },
    { value: 2, name: 'февраль' },
    { value: 3, name: 'март' },
    { value: 4, name: 'апрель' },
    { value: 5, name: 'май' },
    { value: 6, name: 'июнь' },
    { value: 7, name: 'июль' },
    { value: 8, name: 'август' },
    { value: 9, name: 'сентябрь' },
    { value: 10, name: 'октябрь' },
    { value: 11, name: 'ноябрь' },
    { value: 12, name: 'декабрь' },
  ];




  getCurrentMonth()
  {
    let today = new Date(Date.now());
    let monthNum = today.getMonth() + 1;
    return this.monthsList.find(f => f.value === monthNum);
  }


  getCurrentYear()
  {
    let today = new Date(Date.now());
    return today.getFullYear();
  }

}
