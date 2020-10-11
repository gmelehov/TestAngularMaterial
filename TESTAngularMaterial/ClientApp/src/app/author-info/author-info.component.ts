import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CfoModel } from '../purchase-request/purchase-request.component';





@Component({
  selector: 'author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent
{
  constructor()
  {

  }







  @Input()
  login: string;


  @Input()
  name: string;


  @Input()
  accountId: string;


  @Input()
  unitName: string;


  @Input()
  cfoName: string;










}











export class AuthorInfo
{
  constructor(
    public login: string,
    public name: string,
    public accountId: string,
    public unitName: string,
    public cfo: CfoModel
  )
  {

  }



}
