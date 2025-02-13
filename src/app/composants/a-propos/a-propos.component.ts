import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [MatIconModule, ContenuPrincipalLayoutComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {

}
