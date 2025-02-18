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

  ngOnInit(): void {
    this.getListes();
  }

  getListes() : void {
    this.listeService.getListesPubliques()
      .subscribe(res => this.listes = res.listes)
  }
}
