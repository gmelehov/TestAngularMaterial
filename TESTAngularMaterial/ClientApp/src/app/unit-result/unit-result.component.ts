import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UnitResultModel } from '../models/unit-result.model';




@Component({
  selector: 'unit-result',
  templateUrl: './unit-result.component.html',
  styleUrls: ['./unit-result.component.css']
})
export class UnitResultComponent
{
  constructor()
  {

  }






  value: UnitResultModel = new UnitResultModel();


  @Input()
  get unit(): string
  {
    return this.value.unit;
  }
  set unit(val: string)
  {
    this.value.unit = val;
  }


  @Input()
  get decision(): string
  {
    return this.value.decision;
  }
  set decision(val: string)
  {
    this.value.decision = val;
  }


  @Input()
  get comment(): string
  {
    return this.value.comment;
  }
  set comment(val: string)
  {
    this.value.comment = val;
  }




  saveResult()
  {
    if (!!this.value)
    {
      this.value.markAsFinished();
    };
  }
  


}
