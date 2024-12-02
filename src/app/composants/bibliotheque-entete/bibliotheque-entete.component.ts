import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { ZoneDeRechercheComponent } from "../zone-de-recherche/zone-de-recherche.component";

@Component({
  selector: 'app-bibliotheque-entete',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatChipsModule, ZoneDeRechercheComponent],
  templateUrl: './bibliotheque-entete.component.html',
  styleUrl: './bibliotheque-entete.component.css'
})
export class BibliothequeEnteteComponent {
}
