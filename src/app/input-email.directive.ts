import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {

  @HostListener('focus') onFocus() {
    this.element.nativeElement.classList.add('bg-warning');
    console.log('focus');
  }

  @HostListener('blur') onBlur() {
    this.element.nativeElement.classList.remove('bg-warning');

    let value = this.element.nativeElement.value;
    if (!value.includes('@')) {
      if (confirm("@gmail eklensin mi?"))
        this.element.nativeElement.value = value.toLowerCase() + '@gmail.com';
    }
    console.log('blur');
  }

  @HostListener('keyup') onKeyUp(){
    this.element.nativeElement.value = this.element.nativeElement.value.toLowerCase();
  }


  constructor(private element: ElementRef) {

  }

}
