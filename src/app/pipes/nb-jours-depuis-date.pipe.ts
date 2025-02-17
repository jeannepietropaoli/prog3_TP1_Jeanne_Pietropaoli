import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbJoursDepuisDate',
  standalone: true
})
export class NbJoursDepuisDatePipe implements PipeTransform {

  transform(date: string): string {
    const dateActuelle = new Date().getTime();
    const dateAComparer = new Date(date).getTime();
    const differenceEnMs = dateActuelle - dateAComparer;
    const differenceEnJours = Math.floor(differenceEnMs / (1000 * 60 * 60 * 24));
    if(differenceEnJours <= 0) {
      return 'a l\'instant';
    }
    if(differenceEnJours < 31) {
      return differenceEnJours === 1 ? 'il y a 1 jour' : `il y a ${differenceEnJours} jours`;
    } else if (differenceEnJours < 365) {
      const differenceEnMois = Math.floor(differenceEnJours / 31);
      return `il y a ${differenceEnMois} mois`;
    } else {
      const differenceEnAnnees = Math.floor(differenceEnJours / 365);
      return differenceEnAnnees === 1 ? 'il y a 1 an' : `il y a ${differenceEnAnnees} ans`;
    } 
  }

}
