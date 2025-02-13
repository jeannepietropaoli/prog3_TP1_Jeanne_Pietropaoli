import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BibliothequeComponent } from "./composants/bibliotheque/bibliotheque.component";
import { ListeCompletComponent } from './composants/liste-complet/liste-complet.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BibliothequeEnteteComponent } from './composants/bibliotheque-entete/bibliotheque-entete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListeSommaireComponent } from './composants/liste-sommaire/liste-sommaire.component';
import { LISTES } from './mocks/listes';
import { BarreNavigationComponent } from "./composants/barre-navigation/barre-navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BibliothequeComponent, ListeCompletComponent, MatSidenavModule, BibliothequeEnteteComponent, MatIconModule, MatButtonModule, MatToolbarModule, ListeSommaireComponent, BarreNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-musique-jeanne-pietropaoli';
  liste = LISTES[0];
  menuOuvert: boolean = true;
}
