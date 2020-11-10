import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";




@Component({
  selector: 'aside-panel',
  templateUrl: 'aside-panel.component.html',
  styleUrls: ['aside-panel.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ maxWidth: '500px', visibility: 'visible' })),
      state('closed', style({ width: '0px', visibility: 'collapse' })),
      transition('open => closed', [animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
      transition('closed => open', [animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
    ]),
    trigger('leftRight', [
      state('left', style({ transform: 'rotate(180deg)' })),
      state('right', style({ transform: 'rotate(0)' })),
      transition('left => right', [animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
      transition('right => left', [animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
    ]),
  ]
})
export class AsidePanelComponent implements OnInit
{
  constructor()
  {

  }





  async ngOnInit()
  {

  }








  isOpen = true;
  isLeft = false;


  toggle()
  {
    this.isOpen = !this.isOpen;
    this.isLeft = !this.isLeft;
  }


  close()
  {
    this.isOpen = false;
    this.isLeft = false;
  }



  /** Название Material-иконки для переключателя в закрытом состоянии */
  @Input()
  toggleIconName: string = 'chevron_right';




  get wrapperOpenedClass()
  {
    return `wrapper opened`;
  }


  get wrapperClosedClass()
  {
    return `wrapper closed`;
  }


  get wrapperClass()
  {
    return this.isOpen ? this.wrapperOpenedClass : this.wrapperClosedClass;
  }






}
