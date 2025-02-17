import { Component, Input, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CHANSONS } from '../../mocks/chansons';
import { DureeHeureMinSecPipe } from "../../pipes/duree-heure-min-sec.pipe";
import { DureeFormatteDeuxChiffresPipe } from "../../pipes/duree-formatte-deux-chiffres.pipe";
import { FormatterNombreUnitesMiliersMillionsPipe } from '../../pipes/formatter-nombre-unites-miliers-millions.pipe';
import { Chanson } from '../../interfaces/chanson';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import { I18nPluralPipe } from '@angular/common';
import { TooltipComponent } from "../tooltip/tooltip.component";
import { NbJoursDepuisDatePipe } from '../../pipes/nb-jours-depuis-date.pipe';
import { ChansonService } from '../../services/chanson.service';

@Component({
  selector: 'app-chanson-complete',
  standalone: true,
  imports: [MatIconModule, DureeFormatteDeuxChiffresPipe, DureeHeureMinSecPipe, FormatterNombreUnitesMiliersMillionsPipe, ContenuPrincipalLayoutComponent, I18nPluralPipe, TooltipComponent, NbJoursDepuisDatePipe],
  templateUrl: './chanson-complete.component.html',
  styleUrl: './chanson-complete.component.css'
})
export class ChansonCompleteComponent {
  constructor(private chansonService: ChansonService) { }

  @Input() chansonId: number = 0;

  ngOnInit(): void {
    this.getChanson(this.chansonId);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['chansonId']) {
      this.chanson = CHANSONS[this.chansonId];
    }
  }

  chanson: Chanson = {
    id: 999999,
    titre: 'Titre inconnu',
    artiste: 'Artiste inconnu',
    nomAlbum: 'Album inconnu',
    datePublication: '2025-02-17',
    duree: 0,
    nombreLecture: 0
  };

  getChanson(chansonId: number) : void {
    this.chansonService.getChanson(chansonId)
      .subscribe(res => this.chanson = res.chanson)
  }

  tooltipNbEcoutesMessage: { [k: string]: string } = {
    '=0': 'Aucune écoute',
    '=1': '1 écoute',
    'other': '# écoutes'
  };

  // classes conditionnelles en fonction du nombre de lectures
  classesChanson() {
    return ({
      'populaire': this.chanson.nombreLecture > 5000, // nombre de lectures > 5000
      'impopulaire': this.chanson.nombreLecture < 100 // nombre de lectures < 100
    })
  }
}
