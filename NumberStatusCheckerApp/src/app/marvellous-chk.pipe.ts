import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform 
{

  transform(value: number, param: string): string 
  {
    if (param === 'Prime') 
    {
      return this.isPrime(value) ? 'It is a Prime number' : 'It is not a Prime number';
    } 
    else if (param === 'Perfect') 
    {
      return this.isPerfect(value) ? 'It is a Perfect number' : 'It is not a Perfect number';
    } 
    else if (param === 'Even') 
    {
      return this.isEven(value) ? 'It is an Even number' : 'It is not an Even number';
    } 
    else if (param === 'Odd') 
    {
      return this.isOdd(value) ? 'It is an Odd number' : 'It is not an Odd number';
    } 
    else 

    {
      return 'Invalid parameter';
    }
  }

  private isPrime(num: number): boolean 
  {
    if (num <= 1) 
    {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
      if (num % i === 0) 
      {
        return false;
      }
    }

    return true;
  }

  private isPerfect(num: number): boolean 
  {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
      if (num % i === 0) 
      {
        sum += i;
        if (i !== num / i) 
        {
          sum += num / i;
        }
      }
    }
    return sum === num && num !== 1;
  }

  private isEven(num: number): boolean 
  {
    return num % 2 === 0;
  }

  private isOdd(num: number): boolean 
  {
    return num % 2 !== 0;
  }
}


