import { state, transition, trigger, animate, style } from '@angular/animations';
import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, ViewChild } from '@angular/core';




@Component({
  selector: 'mat-expander',
  templateUrl: 'mat-expander.component.html',
  styleUrls: ['mat-expander.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ maxHeight: '500px', visibility: 'visible', paddingTop: '32px' })),
      state('closed', style({ maxHeight: '0px', visibility: 'collapse', paddingTop: '0px' })),
      transition('open => closed', [animate('275ms cubic-bezier(0.4,0.0,0.2,1)')]),
      transition('closed => open', [animate('275ms cubic-bezier(0.4,0.0,0.2,1)')]),
    ]),
    trigger('upDown', [
      state('up', style({ transform: 'rotate(180deg)' })),
      state('down', style({ transform: 'rotate(0)' })),
      transition('up => down', [animate('275ms cubic-bezier(0.4,0.0,0.2,1)')]),
      transition('down => up', [animate('275ms cubic-bezier(0.4,0.0,0.2,1)')]),
    ]),
  ]
})
export class MatExpanderComponent
{
  constructor()
  {
    globalThis.MEXP = this;
  }




  @ViewChild("hdr", { static: false })
  header: ElementRef;






  isOpen = false;
  isUp = false;

  toggle()
  {
    this.isOpen = !this.isOpen;
    this.isUp = !this.isUp;
  }


  close()
  {
    this.isOpen = false;
    this.isUp = false;
  }




  /** Название Material-иконки для переключателя в закрытом состоянии */
  @Input()
  toggleIconName: string = 'arrow_downward';



 
  /** Elevation карточки в открытом состоянии */
  @Input()
  zOpened: number = 4;

  /** Elevation карточки в закрытом состоянии */
  @Input()
  zClosed: number = 0;

  /** CSS-класс для открытого состояния карточки */
  get cardOpenedClass()
  {
    return `mat-elevation-z${this.zOpened} item-card`;
  }

  /** CSS-класс для закрытого состояния карточки */
  get cardClosedClass()
  {
    return `mat-elevation-z${this.zClosed} item-card`;
  }

  /** CSS-класс для карточки */
  get cardClass()
  {
    return this.isOpen ? this.cardOpenedClass : this.cardClosedClass;
  }



  get triggerWidth()
  {
    return this.isOpen ? `${this.header.nativeElement.offsetWidth}px` : 'auto';
    //return !!this.header ? `${this.header.nativeElement.offsetWidth}px` : 'inherit';
  }


}
