import { Component, Input, SimpleChanges } from '@angular/core';
import { ListeCompletComponent } from "../liste-complet/liste-complet.component";
import { LISTES } from '../../mocks/listes';
import { ChansonCompleteComponent } from "../chanson-complete/chanson-complete.component";

@Component({
  selector: 'app-liste-et-chansons-completes',
  standalone: true,
  imports: [ListeCompletComponent, ChansonCompleteComponent],
  templateUrl: './liste-et-chansons-completes.component.html',
  styleUrl: './liste-et-chansons-completes.component.css'
})
export class ListeEtChansonsCompletesComponent {
  @Input() listeId: number = 0;
  chansonId = LISTES[this.listeId].chansons[0].id; // sélectionne la première chanson de la liste de lecture sélectionnée

  ngOnChanges(changes: SimpleChanges) {
    if(changes['listeId']) {
      this.chansonId = LISTES[this.listeId].chansons[0].id;
    }
  }
}
