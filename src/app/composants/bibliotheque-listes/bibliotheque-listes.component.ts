import { Component, Input } from '@angular/core';
import { ListeSommaireComponent } from "../liste-sommaire/liste-sommaire.component";
import { LISTES } from '../../mocks/listes';
import { Liste } from '../../interfaces/liste';

@Component({
  selector: 'app-bibliotheque-listes',
  standalone: true,
  imports: [ListeSommaireComponent],
  templateUrl: './bibliotheque-listes.component.html',
  styleUrl: './bibliotheque-listes.component.css'
})
export class BibliothequeListesComponent {
  @Input() listes: Liste[] = [];
  imageListeParDefaut = 'assets/logo-musique-defaut.png';
}
