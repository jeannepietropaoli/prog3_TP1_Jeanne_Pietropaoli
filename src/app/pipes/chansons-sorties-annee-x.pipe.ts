import { inject, Pipe, PipeTransform } from '@angular/core';
import { Chanson } from '../interfaces/chanson';

@Pipe({
  name: 'chansonsSortiesAnneeX',
  standalone: true,
})
export class ChansonsSortiesAnneeXPipe implements PipeTransform {

  transform(chansons: Chanson[], annee: string = '2025'): Chanson[] {
    return chansons.filter(chanson => {
      const date = new Date(chanson.datePublication);
      const anneeChanson = date.getFullYear().toString();
      return anneeChanson === annee;
    })
  }
}
