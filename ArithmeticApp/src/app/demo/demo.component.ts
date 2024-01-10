import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService]
})
export class DemoComponent {

    public additionResult: number;
    public subtractionResult: number;

    constructor(private obj: ArithmeticService)
    {
        const number1: number = 100;
        const number2: number = 50;

        this.additionResult = this.obj.add(number1, number2);
        this.subtractionResult = this.obj.sub(number1, number2);
    }
}
