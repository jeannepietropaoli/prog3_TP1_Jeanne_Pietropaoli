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
  @Input() image: string = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3262629/library-music-icon-sm.png';
  @Input() titre: string = 'Titre inconnu';
  @Input() sousTitre?: string = '';
  @Input() type: string = 'Type inconnu';
  @Input() id: number = 0;
  @Input() listeId: number = 0;
}
