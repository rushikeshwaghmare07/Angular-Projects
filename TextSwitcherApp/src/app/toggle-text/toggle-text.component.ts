import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-text',
  standalone: true,
  imports: [],
  templateUrl: './toggle-text.component.html',
  styleUrl: './toggle-text.component.css'
})
export class ToggleTextComponent 
{
    public displayText: string = "Marvellous Infosystems";

    public textSwitch()
    {
        if(this.displayText === "Marvellous Infosystems")
        {
            this.displayText = "Educating for a better tomorrow";
        }
        else
        {
            this.displayText = "Marvellous Infosystems"
        }
    }
}
