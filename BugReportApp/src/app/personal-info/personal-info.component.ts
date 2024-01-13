import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent 
{
    firstName: string = "";
    lastName: string = "";
    email: any;
    date: string = "";
    time: string = "";
    impact: string = 'Low';
    bugDetails: string = "";
}
