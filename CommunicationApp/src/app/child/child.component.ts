import { Component, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    @Output() public messageToParent = new EventEmitter();

    public sendDataToParent() 
    {
        this.messageToParent.emit('Hello from Child 👋');
    }

}
