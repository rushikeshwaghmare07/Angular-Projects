import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, param: number): number 
  {
      let additionResult: number = value + param;
      return additionResult;
  }

}
