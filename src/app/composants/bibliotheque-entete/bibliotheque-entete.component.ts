import { Component, Input, SimpleChanges } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { ZoneDeRechercheComponent } from "../zone-de-recherche/zone-de-recherche.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bibliotheque-entete',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatToolbarModule, MatChipsModule, ZoneDeRechercheComponent],
  templateUrl: './bibliotheque-entete.component.html',
  styleUrl: './bibliotheque-entete.component.css'
})
export class BibliothequeEnteteComponent {
  @Input() listeSelectionneeId: number = 0;

  lienAccueil: string = `/liste-de-lecture/0`

  ngOnInit() {
    this.lienAccueil = `/liste-de-lecture/${this.listeSelectionneeId}`
  }

 ngOnChanges(changes: SimpleChanges) {
    if(changes['listeSelectionneeId']) {
      this.lienAccueil = `/liste-de-lecture/${this.listeSelectionneeId}`
    }
  }
}
