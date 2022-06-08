import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  constructor(private el : ElementRef) {
    this.setHeight(this.initialHeight);
    this.setBorder(this.initialColor);
  }
  
  initialColor:string ='#f5f5f5';
  defaultColor:string ='#009688';
  initialHeight : number = 180;
  @Input('pkmnBorderCard')
  borderColor : string; // alias de pkmnCard
//  @Input()
//  pkmnBorderCard:string // sans alias

  @HostListener('mouseenter')
  onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  setHeight(height : number){
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorder(color : string){
    let border = 'solid 4px' + color
    this.el.nativeElement.style.border = border;
  }
}
