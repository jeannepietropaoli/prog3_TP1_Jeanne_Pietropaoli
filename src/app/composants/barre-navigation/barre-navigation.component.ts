import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-barre-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './barre-navigation.component.html',
  styleUrl: './barre-navigation.component.css'
})
export class BarreNavigationComponent {
  @Input() listeSelectionneeId: number = 0;

  lienAccueil: string = `/liste-de-lecture/0`

  ngOnInit() {
    this.lienAccueil = `/liste-de-lecture/${this.listeSelectionneeId}`
  }

 ngOnChanges(changes: SimpleChanges) {
    if(changes['listeSelectionneeId']) {
      this.lienAccueil = `/liste-de-lecture/${this.listeSelectionneeId}`
    }
  }
}
