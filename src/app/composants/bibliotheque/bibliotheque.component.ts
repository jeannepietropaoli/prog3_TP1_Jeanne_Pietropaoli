import { Component } from '@angular/core';
import { LISTES } from '../../mocks/listes';
import { BibliothequeEnteteComponent } from "../bibliotheque-entete/bibliotheque-entete.component";
import { BibliothequeListesComponent } from "../bibliotheque-listes/bibliotheque-listes.component";
import { Liste } from '../../interfaces/liste';
import { ListeService } from '../../services/liste.service';

@Component({
  selector: 'app-bibliotheque',
  standalone: true,
  imports: [BibliothequeEnteteComponent, BibliothequeListesComponent],
  templateUrl: './bibliotheque.component.html',
  styleUrl: './bibliotheque.component.css'
})
export class BibliothequeComponent {
  constructor(private listeService: ListeService) { }

  listes: Liste[] = [];
  // j'ai choisi de mettre les listes ici car avec les pastilles (chips) dans l'entête de la bibliothèque qui serviront de filtres des listes, il faudra que les listes soient partagées entre bibliotheque-entete et bibliotheque-listes

  ngOnInit(): void {
    this.getListes();
  }

  getListes() : void {
    this.listeService.getListes()
      .subscribe(res => this.listes = res.listes)
  }
}
