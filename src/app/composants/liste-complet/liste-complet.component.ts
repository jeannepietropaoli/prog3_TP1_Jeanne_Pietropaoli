import { Component, Input, SimpleChanges } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { LISTES } from '../../mocks/listes';
import { Liste } from '../../interfaces/liste';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import { FormatterNombreUnitesMiliersMillionsPipe } from '../../pipes/formatter-nombre-unites-miliers-millions.pipe';
import { I18nPluralPipe } from '@angular/common';
import { TooltipComponent } from "../tooltip/tooltip.component";
import { ListeService } from '../../services/liste.service';
import { NbJoursDepuisDatePipe } from '../../pipes/nb-jours-depuis-date.pipe';

@Component({
  selector: 'app-liste-complet',
  standalone: true,
  imports: [MatIconModule, TableauChansonsComponent, ContenuPrincipalLayoutComponent, FormatterNombreUnitesMiliersMillionsPipe, I18nPluralPipe, TooltipComponent, NbJoursDepuisDatePipe],
  templateUrl: './liste-complet.component.html',
  styleUrl: './liste-complet.component.css'
})
export class ListeCompletComponent {
  constructor(private listeService: ListeService) { }

  @Input() listeId: number = 0;

  ngOnInit(): void {
    this.getListe(this.listeId);
  }

  getListe(listeId: number) : void {
    this.listeService.getListe(listeId)
      .subscribe(res => this.liste = res.liste)
  }


  ngOnChanges(changes: SimpleChanges) {
    if(changes['listeId']) {
      this.getListe(this.listeId);
    }
  }

  liste: Liste = {
    id: 0,
        titre: "Titre inconnu",
        type: "Liste de lecture",
        verifie: true,
        datePublication: "2025-02-17",
        visibilite: true,
        nombreSauvegardes: 0,
        chansons: []
  };

  tooltipNbSauvegardesMessage: { [k: string]: string } = {
    '=0': 'Aucune sauvegarde',
    '=1': '1 sauvegarde',
    'other': '# sauvegardes'
  };
}
