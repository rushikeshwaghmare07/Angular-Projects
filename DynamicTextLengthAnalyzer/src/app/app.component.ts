import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
    public inputValue: any;
    public inputLength: number = 0;

    public onInputChange(event: Event)
    {
        const target = event.target as HTMLInputElement;
        this.inputValue = target.value;
        this.inputLength = this.inputValue.length;
    }

}
