import { Component, Input, SimpleChanges } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { LISTES } from '../../mocks/listes';
import { Liste } from '../../interfaces/liste';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";

@Component({
  selector: 'app-liste-complet',
  standalone: true,
  imports: [MatIconModule, TableauChansonsComponent, ContenuPrincipalLayoutComponent],
  templateUrl: './liste-complet.component.html',
  styleUrl: './liste-complet.component.css'
})
export class ListeCompletComponent {
  @Input() listeId: number = 0;
  liste = LISTES[this.listeId];

  ngOnChanges(changes: SimpleChanges) {
    if(changes['listeId']) {
      this.liste = LISTES[this.listeId];
    }
  }
}
