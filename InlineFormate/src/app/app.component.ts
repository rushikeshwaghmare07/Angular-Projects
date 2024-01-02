import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
            <h1 id="heading">Inline format (inside app.component.ts)</h1>
            <hr>
            <label for="inputText">Enter text :</label>
            <input type="text" id="inputText" placeholder="Write your name...">
            <h1 id="marvellousHeading">Marvellous Infosystems</h1>`,
  styles: [`
           #heading 
           {
              color: black;
           }

           #marvellousHeading 
           {
              color: blue;
           }
           
           label 
           {
              display: block;
              margin-top: 20px;
              margin-bottom: 3px;
           }
           
           input 
           {
            width: 200px;
            padding: 5px;
            margin-bottom: 10px;
           }
           `
          ]
})
export class AppComponent {
  title = 'Demo2';
}
