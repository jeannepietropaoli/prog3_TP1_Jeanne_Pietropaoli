import { Pipe, PipeTransform } from '@angular/core';
import { Chanson } from '../interfaces/chanson';

@Pipe({
  name: 'chansonsPopulaires',
  standalone: true
})
export class ChansonsPopulairesPipe implements PipeTransform {

  transform(chansons: Chanson[], nombreLectureMin: number = 5000): Chanson[] {
    return chansons.filter(chanson => chanson.nombreLecture > nombreLectureMin);
  }
}
