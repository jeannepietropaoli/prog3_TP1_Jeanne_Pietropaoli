import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dureeFormatteDeuxChiffres',
  standalone: true
})

// transforme au format 00:00
// exemple: transforme une duree de 24:3 à 24:03
export class DureeFormatteDeuxChiffresPipe implements PipeTransform {

  transform(duree: string): string {
    const dureeSplit = duree.split(':');
    const dureeSplitFormate = dureeSplit.map(tranche => {
      const trancheSplit = tranche.split('');
      return trancheSplit.length === 1 ? `0${tranche}` : `${tranche}`
    })
    return dureeSplitFormate.join(':');
  }

}
