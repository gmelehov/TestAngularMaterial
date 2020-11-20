import { state, transition, trigger, animate, style } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/typings/esm5/overlay';
import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';




@Component({
  selector: 'mat-expander',
  templateUrl: 'mat-expander.component.html',
  styleUrls: ['mat-expander.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ maxHeight: '500px' })),
      state('closed', style({ height: 'auto' })),
      transition('open <=> closed', [animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
    ]),
    trigger('upDown', [
      state('up', style({ transform: 'rotate(180deg)' })),
      state('down', style({ transform: 'rotate(0)' })),
      transition('up <=> down', [animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]),
    ]),
  ]
})
export class MatExpanderComponent implements AfterViewInit
{
  constructor()
  {
    globalThis.MEXP = this;
  }





  ngAfterViewInit()
  {
    document.addEventListener("click", (ev) =>
    {
      ev.stopPropagation();
      if (!(ev.target as HTMLElement).closest('section.overlay-wrapper') && (ev.target as HTMLElement).closest('div.wrapper') != this.header.nativeElement as HTMLElement)
      {
        this.close();
      }
    });

    
  }




  @ViewChild("hdr", { static: false })
  header: ElementRef;

  @ViewChild("overlay", { static: false })
  section: ElementRef;

  @ViewChild("matcard", { static: false })
  card: ElementRef;


  @ViewChild("tmpl", { static: false })
  tmpl: TemplateRef<OverlayRef>;






  isOpen = false;
  isUp = false;

  toggle()
  {
    this.isOpen = !this.isOpen;
    this.isUp = !this.isUp;

    setTimeout(() => this.computeHeight());
  }


  close()
  {
    this.isOpen = false;
    this.isUp = false;

    setTimeout(() => this.computeHeight());
  }




  /** Название Material-иконки для переключателя в закрытом состоянии */
  @Input()
  toggleIconName: string = 'arrow_drop_down';




  /** Elevation карточки в открытом состоянии */
  @Input()
  zOpened: number = 4;

  /** Elevation карточки в закрытом состоянии */
  @Input()
  zClosed: number = 0;


  fullHeight: string = 'auto';



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


  get overlayHeight()
  {
    return !!this.section && !!this.header ? this.isOpen ? `${this.section.nativeElement.offsetHeight + this.header.nativeElement.offsetHeight}px` : 'auto' : 'auto';
  }



  computeHeight()
  {
    this.fullHeight = !!this.section && !!this.header ? this.isOpen ? `${this.section.nativeElement.offsetHeight + this.header.nativeElement.offsetHeight}px` : 'auto' : 'auto';
  }



  noAction()
  {

  }


}
