import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dureeHeureMinSec',
  standalone: true
})
export class DureeHeureMinSecPipe implements PipeTransform {

  transform(duree: number): string {
    if(duree < 3600) {
      const nbMinutes = Math.floor(duree / 60);
      const nbSecondes = duree % 60;
      return (`${nbMinutes}:${nbSecondes}`);
    }
    else {
      const nbHeures = Math.floor(duree / 3600);
      const nbMinutes = Math.floor((duree % 3600) / 60);
      const nbSecondes = duree % 60;
      return (`${nbHeures}:${nbMinutes}:${nbSecondes}`);
    }
  }

}
