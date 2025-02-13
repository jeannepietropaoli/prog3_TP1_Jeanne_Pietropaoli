import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenu-principal-layout',
  standalone: true,
  imports: [],
  templateUrl: './contenu-principal-layout.component.html',
  styleUrl: './contenu-principal-layout.component.css'
})
export class ContenuPrincipalLayoutComponent {
  @Input() image: string = 'assets/app-logo.png';
  @Input() altImage: string = 'Image de la page';
}
