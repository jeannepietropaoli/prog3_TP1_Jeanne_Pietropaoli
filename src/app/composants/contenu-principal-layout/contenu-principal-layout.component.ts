import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenu-principal-layout',
  standalone: true,
  imports: [],
  templateUrl: './contenu-principal-layout.component.html',
  styleUrl: './contenu-principal-layout.component.css'
})
export class ContenuPrincipalLayoutComponent {
  imageParDefaut: string = "../../../assets/logo-musique-defaut-jaune.png";
  
  @Input() image: string = 'assets/app-logo.png';
  @Input() altImage: string = 'Image de la page';

  remplacerImage(imageElement: HTMLImageElement) {
    imageElement.setAttribute('src', this.imageParDefaut)
  }
}
