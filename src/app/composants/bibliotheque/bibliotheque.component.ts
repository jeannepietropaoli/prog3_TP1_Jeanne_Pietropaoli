import { Component, Input, Output } from '@angular/core';
import { BibliothequeEnteteComponent } from "../bibliotheque-entete/bibliotheque-entete.component";
import { BibliothequeListesComponent } from "../bibliotheque-listes/bibliotheque-listes.component";
import { Liste } from '../../interfaces/liste';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-bibliotheque',
  standalone: true,
  imports: [BibliothequeEnteteComponent, BibliothequeListesComponent],
  templateUrl: './bibliotheque.component.html',
  styleUrl: './bibliotheque.component.css'
})
export class BibliothequeComponent {
  @Input() listes: Liste[] = [];
  @Input() listeSelectionneeId: number = 0;
}
