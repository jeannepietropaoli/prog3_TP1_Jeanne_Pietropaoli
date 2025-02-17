import { Component } from '@angular/core';
import { ContenuPrincipalLayoutComponent } from "../contenu-principal-layout/contenu-principal-layout.component";
import {MatIconModule} from '@angular/material/icon';
import { TableauChansonsComponent } from "../tableau-chansons/tableau-chansons.component";
import { Chanson } from '../../interfaces/chanson';
import { CHANSONS } from '../../mocks/chansons';
import { ChansonService } from '../../services/chanson.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ContenuPrincipalLayoutComponent, MatIconModule, TableauChansonsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private chansonService: ChansonService) { }

  chansons: Chanson[] = [];

  ngOnInit(): void {
    this.getChansons();
  }

  getChansons() : void {
    this.chansonService.getChansons()
      .subscribe(res => this.chansons = res.chansons)
  }
}
