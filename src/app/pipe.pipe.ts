import { Pipe, PipeTransform } from '@angular/core';
import { ListOfThingsComponent } from './list-of-things/list-of-things.component';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
//   transform(listOfThings: ListOfThingsComponent[], searchTerm: string){
//     if(!listOfThings || !searchTerm) {
//       return listOfThings;
//     }
//     return listOfThings.filter(ListOfThingsComponent => )
//   }
}
