import { Component, Input, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CHANSONS } from '../../mocks/chansons';
import { DureeHeureMinSecPipe } from "../../pipes/duree-heure-min-sec.pipe";
import { DureeFormatteDeuxChiffresPipe } from "../../pipes/duree-formatte-deux-chiffres.pipe";
import { Chanson } from '../../interfaces/chanson';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";


@Component({
  selector: 'app-chanson-complete',
  standalone: true,
  imports: [MatIconModule, DureeFormatteDeuxChiffresPipe, DureeHeureMinSecPipe, ContenuPrincipalLayoutComponent],
  templateUrl: './chanson-complete.component.html',
  styleUrl: './chanson-complete.component.css'
})
export class ChansonCompleteComponent {
  @Input() chansonId: number = 0;
  chanson = CHANSONS[this.chansonId];

  // classes conditionnelles en fonction du nombre de lectures
  classesChanson() {
    return ({
      'populaire': this.chanson.nombreLecture > 5000, // nombre de lectures > 5000
      'impopulaire': this.chanson.nombreLecture < 100 // nombre de lectures < 100
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['chansonId']) {
      this.chanson = CHANSONS[this.chansonId];
    }
  }
}
