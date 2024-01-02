import { Component } from '@angular/core';

@Component({
  selector: 'app-text-display',
  standalone: true,
  imports: [],
  templateUrl: './text-display.component.html',
  styleUrl: './text-display.component.css'
})
export class TextDisplayComponent 
{
    public displayText: string = "Marvellous Infosystems";

    setUpperCase()
    {
        this.displayText = "MARVELLOUS INFOSYSTEMS";
    }

    setLowerCase()
    {
        this.displayText = "marvellous infosystems";
    }
}
