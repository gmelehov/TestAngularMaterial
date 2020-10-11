import { Component, Input } from '@angular/core';
import { AuthorInfo } from '../author-info/author-info.component';
import { BudgetPeriod, Month } from '../budget-period-selector/budget-period-selector.component';
import { PurchaseItem } from '../purchase-item-input/purchase-item-input.component';





@Component({
  selector: 'purchase-request',
  templateUrl: './purchase-request.component.html',
  styleUrls: ['./purchase-request.component.css']
})
export class PurchaseRequestComponent
{
  constructor()
  {
    let now = new Date(Date.now());
    let acfo = new CfoModel('cfo2', 'ЦФО №2');
    let tcfo = new CfoModel('cfo2', 'ЦФО №2');
    let ainfo = new AuthorInfo('gnm2', 'Мелехов Григорий Николаевич', 'gnm2@msc', 'Департамент Информационных технологий', acfo);
    this.value = new PurchaseRequest(now, ainfo, tcfo, 'Европлан', new BudgetPeriod());

    globalThis.PREQ = this;
  }









  value: PurchaseRequest;


  @Input()
  get createdAt(): Date
  {
    return this.value.createdAt;
  }
  set createdAt(val: Date)
  {
    this.value.createdAt = val;
  }


  @Input()
  get authorLogin(): string
  {
    return this.value.authorInfo.login;
  }
  set authorLogin(val: string)
  {
    this.value.authorInfo.login = val;
  }


  @Input()
  get authorAccId(): string
  {
    return this.value.authorInfo.accountId;
  }
  set authorAccId(val: string)
  {
    this.value.authorInfo.accountId = val;
  }


  @Input()
  get authorName(): string
  {
    return this.value.authorInfo.name;
  }
  set authorName(val: string)
  {
    this.value.authorInfo.name = val;
  }


  @Input()
  get authorUnit(): string
  {
    return this.value.authorInfo.unitName;
  }
  set authorUnit(val: string)
  {
    this.value.authorInfo.unitName = val;
  }


  @Input()
  get authorCfoGuid(): string
  {
    return this.value.authorInfo.cfo.guid;
  }
  set authorCfoGuid(val: string)
  {
    this.value.authorInfo.cfo.guid = val;
    if (!!this.getCfoModelByGuid(val))
    {
      this.value.authorInfo.cfo.name = this.getCfoModelByGuid(val).name;
    }
  }


  @Input()
  get targetCfoGuid(): string
  {
    return this.value.targetCfo.guid;
  }
  set targetCfoGuid(val: string)
  {
    this.value.targetCfo.guid = val;
    if (!!this.getCfoModelByGuid(val))
    {
      this.value.targetCfo.name = this.getCfoModelByGuid(val).name;
    }
  }


  @Input()
  get budgetPeriodMonth(): number
  {
    return this.value.budgetPeriod.month;
  }
  set budgetPeriodMonth(val: number)
  {
    this.value.budgetPeriod.month = val;
  }


  @Input()
  get budgetPeriodYear(): number
  {
    return this.value.budgetPeriod.year;
  }
  set budgetPeriodYear(val: number)
  {
    this.value.budgetPeriod.year = val;
  }


  @Input()
  get company(): string
  {
    return this.value.company;
  }
  set company(val: string)
  {
    this.value.company = val;
  }







  
  get itemsList(): PurchaseItem[]
  {
    return this.value.itemsList;
  }
  set itemsList(val: PurchaseItem[])
  {
    this.value.itemsList = val;
  }





  cfoList: CfoModel[] = [
    new CfoModel('cfo1', 'ЦФО №1'),
    new CfoModel('cfo2', 'ЦФО №2'),
    new CfoModel('cfo3', 'ЦФО №3'),
    new CfoModel('cfo4', 'ЦФО №4'),
    new CfoModel('cfo5', 'ЦФО №5'),
  ];


  companiesList: string[] = [
    'Европлан',
    'Европлан Сервис',
    'Автолизинг'
  ];









  getCfoModelByGuid(guid: string): CfoModel
  {
    let found = this.cfoList.find(f => f.guid === guid);
    return found;
  }




  get totalItems()
  {
    return this.itemsList.length;
  }

  get totalItemsCost()
  {
    return this.itemsList.map(m => m.cost).reduce((sum, curr) => sum + curr, 0);
  }


  




  receiveBudgetMonth(value: number)
  {
    this.budgetPeriodMonth = value;
  }

  receiveBudgetYear(value: number)
  {
    this.budgetPeriodYear = value;
  }

  receivePurchaseItems(value: PurchaseItem[])
  {
    this.itemsList = Array.from(value);
  }





  sendInfoToConsole()
  {
    console.dir(this);
  }




}













export class PurchaseRequest
{
  constructor(
    public createdAt: Date,
    public authorInfo: AuthorInfo,
    public targetCfo: CfoModel,
    public company: string,
    public budgetPeriod: BudgetPeriod,
    public itemsList: PurchaseItem[] = new Array<PurchaseItem>(),
  )
  {

  }





}












export class CfoModel
{
  constructor(public guid: string, public name: string)
  {

  }
}
