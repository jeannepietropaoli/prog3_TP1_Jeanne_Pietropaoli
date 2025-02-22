import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Liste } from './interfaces/liste';
import { ListeService } from './services/liste.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule, RouterOutlet, BibliothequeComponent, ListeCompletComponent, MatSidenavModule, BibliothequeEnteteComponent, MatIconModule, MatButtonModule, MatToolbarModule, ListeSommaireComponent, BarreNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private listeService: ListeService, private router: Router) { }

  listes: Liste[] = [];

  listeSelectionneeId: number = 0;

  ngOnInit(): void {
    this.getListes();
  }

  getListes() : void {
    this.listeService.getListesPubliques()
      .subscribe(res => {
        this.listes = res.listes;
        this.listeSelectionneeId = this.listes[0].id || 0;
        this.router.navigate([`liste-de-lecture/${this.listeSelectionneeId}`]);
      })
  }

  title = 'app-musique-jeanne-pietropaoli';

  menuOuvert: boolean = true;
}
