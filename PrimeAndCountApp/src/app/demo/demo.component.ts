import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [NumberService, StringService]
})
export class DemoComponent 
{
    public isPrime: boolean;
    public totalCapital: number;

    public inputValue: number = 13;
    public inputString: string = "MareveLLous InfoSystem";

    constructor(private numberService: NumberService, private stringService: StringService)
    {

        this.isPrime = this.numberService.chkPrime(this.inputValue);
        this.totalCapital = this.stringService.countCapital(this.inputString);
    }
}
