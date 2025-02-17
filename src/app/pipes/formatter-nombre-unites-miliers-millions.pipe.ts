import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatterNombreUnitesMiliersMillions',
  standalone: true
})
export class FormatterNombreUnitesMiliersMillionsPipe implements PipeTransform {

  transform(nombre: number): string {
    if(nombre < 1000) {
      return nombre.toString();
    } else if (nombre < 1000000) {
      const nombreArray = nombre.toString().split('');
      // supprime les 3 derniers chiffres, pour ne laisser que l'arrondi des milliers
      nombreArray.splice(nombreArray.length - 3, 3);
      return `${nombreArray.join('')}k`
    } else {
      const nombreArray = nombre.toString().split('');
      // supprime les 3 derniers chiffres, pour ne laisser que l'arrondi des millions
      nombreArray.splice(nombreArray.length - 6, 6);
      return `${nombreArray.join('')}M`
    }
  }

}
