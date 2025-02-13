import { Pipe, PipeTransform } from '@angular/core';
import { Chanson } from '../interfaces/chanson';

@Pipe({
  name: 'chansonsMoinsConnues',
  standalone: true
})
export class ChansonsMoinsConnuesPipe implements PipeTransform {

   transform(chansons: Chanson[], nombreLectureMax: number = 100): Chanson[] {
     return chansons.filter(chanson => chanson.nombreLecture < nombreLectureMax);
   }

}
