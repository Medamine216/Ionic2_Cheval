import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform{
   transform(arr){
    if(arr === undefined){return null;}
    return arr.sort((a, b) => {
      if (a.Gain < b.Gain) {
        return 1;
      }
      if (a.Gain > b.Gain) {
        return -1;
      }
      return 0;
    });
  }
}