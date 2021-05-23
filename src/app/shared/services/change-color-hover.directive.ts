import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColorHover]'
})
export class ChangeColorHoverDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('appChangeColorHover') hoverClass:any;  

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
