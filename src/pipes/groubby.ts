import { Injectable, Pipe ,PipeTransform } from '@angular/core';

/*
  Generated class for the Groubby pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'groubby'
})
@Injectable()
export class Groubby implements PipeTransform {
 
    transform(input: any): number {
    if (Array.isArray(input) ) {
      return input.reduce((previous, current) => {
        return previous + parseInt(current.CourseHasCheval.part_propritaire);
      }, 0);
    }

    return input;  
  }
}


