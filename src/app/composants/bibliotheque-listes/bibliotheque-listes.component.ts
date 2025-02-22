import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { ListeSommaireComponent } from "../liste-sommaire/liste-sommaire.component";
import { Liste } from '../../interfaces/liste';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-bibliotheque-listes',
  standalone: true,
  imports: [ListeSommaireComponent],
  templateUrl: './bibliotheque-listes.component.html',
  styleUrl: './bibliotheque-listes.component.css'
})
export class BibliothequeListesComponent {
  @Input() listes: Liste[] = [];
  @Input() listeSelectionneeId: number = 0;

  imageListeParDefaut: string = "../../../assets/logo-musique-defaut-jaune.png";

  ngOnInit() {
    this.listeSelectionneeId = this.listeSelectionneeId;
  }

  
  ngOnChanges(changes: SimpleChanges) {
    if(changes['listeSelectionneeId']) {
      this.listeSelectionneeId = this.listeSelectionneeId;
    }
  }
  
  selectionnerListe(listeId: number) : void {
    this.listeSelectionneeId = listeId;
  }
}
