import { Pipe, PipeTransform } from '@angular/core';
import { publicDecrypt } from 'crypto';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  {
      let name: string = "Marvellous"
      // Create new string to hold the reverse string
      let temp: string = "";

      for (let i = value.length - 1; i >= 0; i--) 
      {
        temp += value[i];
      }

      // Traverse the the string from end and copy th contents in temp.
      return temp;
  }

}
