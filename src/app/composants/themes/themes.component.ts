import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { ChansonsSortiesAnneeXPipe } from '../../pipes/chansons-sorties-annee-x.pipe';
import { ChansonsMoinsConnuesPipe } from '../../pipes/chansons-moins-connues.pipe';
import { ChansonsAlbumsBestOfPipe } from '../../pipes/chansons-albums-best-of.pipe';
import { RouterLink } from '@angular/router';
import { ChansonService } from '../../services/chanson.service';
import { Chanson } from '../../interfaces/chanson';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [ContenuPrincipalLayoutComponent, MatIcon, MatIconModule, RouterLink, TableauChansonsComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css',
  providers: [ChansonsSortiesAnneeXPipe, ChansonsMoinsConnuesPipe, ChansonsAlbumsBestOfPipe]
})
export class ThemesComponent {
    constructor(private chansonService: ChansonService) { }

  @Input() nomTheme: string = '';

  private chansonsSortiesAnneeXPipe = inject(ChansonsSortiesAnneeXPipe);
  private chansonsMoinsConnuesPipe = inject(ChansonsMoinsConnuesPipe);
  private chansonsAlbumsBestOfPipe = inject(ChansonsAlbumsBestOfPipe);

  themes = [
    { nom: 'sorties-2025', nomDisplay: 'Sorties 2025', id: 1, description: 'Les nouvelles sorties de 2025 pour bien commencer l\'année.', pipe: this.chansonsSortiesAnneeXPipe, maticon: 'new_releases' },
    { nom: 'best-of', nomDisplay: 'Best of', id: 2, description: 'Chanons des albums best of.', pipe: this.chansonsAlbumsBestOfPipe, maticon: 'star' },
    { nom: 'moins-connues', nomDisplay: 'Moins connues', id: 3, description: 'Les chansons moins connues avec peu d\'ecoutes.', pipe: this.chansonsMoinsConnuesPipe, maticon: 'visibility_off' },
  ]

  getTheme() {
    return this.themes.find(theme => this.nomTheme === theme.nom);
}

  theme = this.getTheme();
  chansons:Chanson[] = [];
  
  ngOnInit(): void {
    this.theme = this.getTheme();
    this.getChansons();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['nomTheme']) {
      this.theme = this.getTheme();
      this.getChansons();
    }
  }

  getChansons() : void {
    this.chansonService.getChansons()
      .subscribe(res => this.chansons = res.chansons)
  }

  get chansonsFiltrees(): Chanson[] {
    return this.theme?.pipe.transform(this.chansons) || [];
  }
}
