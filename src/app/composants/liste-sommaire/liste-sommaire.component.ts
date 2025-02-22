import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-sommaire',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './liste-sommaire.component.html',
  styleUrl: './liste-sommaire.component.css'
})
export class ListeSommaireComponent {
  imageParDefaut: string = "../../../assets/logo-musique-defaut-jaune.png";

  @Input() image: string = this.imageParDefaut;
  @Input() titre: string = 'Titre inconnu';
  @Input() sousTitre?: string = '';
  @Input() type: string = 'Type inconnu';
  @Input() id: number = 0;
  @Input() listeId: number = 0;
  @Input() selectionnee: Boolean = false;

  remplacerImage(imageElement: HTMLImageElement) {
    imageElement.setAttribute('src', this.imageParDefaut)
  }

}
