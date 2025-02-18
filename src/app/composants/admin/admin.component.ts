import { Component } from '@angular/core';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import {MatIconModule} from '@angular/material/icon';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";
import { ListeService } from '../../services/liste.service';
import { Liste } from '../../interfaces/liste';
import { TableauListesBtnActionsComponent } from "../tableau-listes-btn-actions/tableau-listes-btn-actions.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ContenuPrincipalLayoutComponent, MatIconModule, TableauChansonsComponent, TableauListesBtnActionsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
