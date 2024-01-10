import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  countCapital(str: string): number
  {
      let count: number = 0;

      for(let i = 1; i < str.length; i++)
      {
          if(str[i] == str[i].toUpperCase())
          {
              count++;
          }
      }
      return count;
  }
}
