import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-zone-de-recherche',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './zone-de-recherche.component.html',
  styleUrl: './zone-de-recherche.component.css'
})
export class ZoneDeRechercheComponent {
  valeurInputRecherche = '';
}
