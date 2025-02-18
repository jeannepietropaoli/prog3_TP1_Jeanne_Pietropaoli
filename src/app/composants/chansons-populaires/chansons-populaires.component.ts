import { Component, SimpleChanges } from '@angular/core';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";
import { Chanson } from '../../interfaces/chanson';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { ChansonsPopulairesPipe } from '../../pipes/chansons-populaires.pipe';
import { ChansonService } from '../../services/chanson.service';

@Component({
  selector: 'app-chansons-populaires',
  standalone: true,
  imports: [ChansonsPopulairesPipe, TableauChansonsComponent, ContenuPrincipalLayoutComponent, MatIcon, MatIconModule],
  templateUrl: './chansons-populaires.component.html',
  styleUrl: './chansons-populaires.component.css'
})
export class ChansonsPopulairesComponent {
  constructor(private chansonService: ChansonService) { }

  chansons:Chanson[] = [];

  ngOnInit(): void {
    this.getChansons();
  }

   ngOnChanges(changes: SimpleChanges) {
      if(changes['chansonId']) {
        this.getChansons();
      }
    }

  getChansons() : void {
    this.chansonService.getChansons()
      .subscribe(res => this.chansons = res.chansons)
  }
}
