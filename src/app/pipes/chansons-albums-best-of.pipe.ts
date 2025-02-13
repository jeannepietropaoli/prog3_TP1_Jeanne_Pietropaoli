import { Pipe, PipeTransform } from '@angular/core';
import { Chanson } from '../interfaces/chanson';

@Pipe({
  name: 'chansonsAlbumsBestOf',
  standalone: true
})
export class ChansonsAlbumsBestOfPipe implements PipeTransform {

  transform(chansons: Chanson[]): Chanson[] {
    const keywords = ['best of', 'best-of', 'bestof', 'Best Of', 'Best-Of', 'BestOf', 'Best of', 'Best-Of', 'BestOf'];
    return chansons.filter(chanson => keywords.some(keyword => chanson.nomAlbum.includes(keyword)))
  }
}
