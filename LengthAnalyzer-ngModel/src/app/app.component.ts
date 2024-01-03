import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
    public inputValue: any;
    public inputLength: number = 0;

    updateLength()
    {
        this.inputLength = this.inputValue.length;
    }
}
