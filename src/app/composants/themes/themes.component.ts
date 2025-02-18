import { Component, inject, SimpleChanges } from '@angular/core';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";
import { Chanson } from '../../interfaces/chanson';
import { CHANSONS } from '../../mocks/chansons';
import { ChansonsSortiesAnneeXPipe } from '../../pipes/chansons-sorties-annee-x.pipe';
import { ChansonsMoinsConnuesPipe } from '../../pipes/chansons-moins-connues.pipe';
import { ChansonsAlbumsBestOfPipe } from '../../pipes/chansons-albums-best-of.pipe';
import { ChansonService } from '../../services/chanson.service';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [ContenuPrincipalLayoutComponent, MatIcon, MatIconModule, TableauChansonsComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css',
  providers: [ChansonsSortiesAnneeXPipe, ChansonsMoinsConnuesPipe, ChansonsAlbumsBestOfPipe]
})
export class ThemesComponent {
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

  private chansonsSortiesAnneeXPipe = inject(ChansonsSortiesAnneeXPipe);
  private chansonsMoinsConnuesPipe = inject(ChansonsMoinsConnuesPipe);
  private chansonsAlbumsBestOfPipe = inject(ChansonsAlbumsBestOfPipe);
  
  themes = [
    { nom: 'Sorties 2025', id: 1, description: 'Les nouvelles sorties de 2025 pour bien commencer l\'année.', pipe: this.chansonsSortiesAnneeXPipe, maticon: 'new_releases' },
    { nom: 'Best of', id: 2, description: 'Chanons des albums best of.', pipe: this.chansonsAlbumsBestOfPipe, maticon: 'star' },
    { nom: 'Moins connues', id: 3, description: 'Les chansons moins connues avec peu d\'ecoutes.', pipe: this.chansonsMoinsConnuesPipe, maticon: 'visibility_off' },
  ]

  themeSelectionne = this.themes[0];

  get chansonsFiltrees(): Chanson[] {
    return this.themeSelectionne.pipe.transform(this.chansons);
  }

  selectionnerTheme(themeId: number) : void {
    this.themeSelectionne = this.themes.find(theme => themeId === theme.id) || this.themes[0];
  }
}
