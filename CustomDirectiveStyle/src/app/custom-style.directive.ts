import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor() { }

  @HostBinding("style.backgroundColor") backgroundColor = "yellow";
  @HostBinding("style.fontWeight") fontWeight = "Bold";
}
