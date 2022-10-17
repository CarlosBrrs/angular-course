import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format')
  format1!: string;

  @Input('appInputFormat')
  format2!: string;

  // ElementRef es un servicio definido en Angular que nos da aceso al objeto DOM 
  constructor(private el: ElementRef) {}

    
  @HostListener('focus') //Se pasa el nombre del evento DOM que se quiere tratar usando la importacion de HostListener
  onFocus() {
    console.log("On focus!");
  
  }

  @HostListener('blur')
  onBlur() {
    console.log("On blur!");
    let value: string = this.el.nativeElement.value;
    if(this.format1 == 'lowercase') { //Para la segunda forma, referirse a format2 en esta linea.
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
