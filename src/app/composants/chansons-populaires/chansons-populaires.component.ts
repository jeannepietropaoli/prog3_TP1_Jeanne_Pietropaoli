import { Component } from '@angular/core';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";
import { CHANSONS } from '../../mocks/chansons';
import { Chanson } from '../../interfaces/chanson';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { ChansonsPopulairesPipe } from '../../pipes/chansons-populaires.pipe';

@Component({
  selector: 'app-chansons-populaires',
  standalone: true,
  imports: [ChansonsPopulairesPipe, TableauChansonsComponent, ContenuPrincipalLayoutComponent, MatIcon, MatIconModule],
  templateUrl: './chansons-populaires.component.html',
  styleUrl: './chansons-populaires.component.css'
})
export class ChansonsPopulairesComponent {
  chansons:Chanson[] = CHANSONS;
}
