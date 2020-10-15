import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





/**
 * @title Stepper vertical
 */
@Component({
  selector: 'business-process',
  templateUrl: 'business-process.component.html',
  styleUrls: ['business-process.component.css']
})
export class BusinessProcessComponent implements OnInit
{
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  constructor(private _formBuilder: FormBuilder) { }




  ngOnInit()
  {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }






}
