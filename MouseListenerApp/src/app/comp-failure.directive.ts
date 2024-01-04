import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private obj : ElementRef) 
  {}

  @HostListener("mouseenter") onMouseEnter()
  {
      this.obj.nativeElement.style.color = "Red";
  }

  @HostListener("mouseleave") onMouseLeave()
  {
      this.obj.nativeElement.style.color = "Black";
  }
}
