import { Chanson } from '../../interfaces/chanson';
import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import { DureeHeureMinSecPipe } from "../../pipes/duree-heure-min-sec.pipe";
import { DureeFormatteDeuxChiffresPipe } from "../../pipes/duree-formatte-deux-chiffres.pipe";
import { FormatterNombreUnitesMiliersMillionsPipe } from '../../pipes/formatter-nombre-unites-miliers-millions.pipe';
import { RouterLink } from "@angular/router";
import { I18nPluralPipe } from '@angular/common';
import { TooltipComponent } from "../tooltip/tooltip.component";

@Component({
  selector: 'app-tableau-chansons',
  standalone: true,
  imports: [RouterLink, MatTableModule, MatSortModule, MatIconModule, DureeHeureMinSecPipe, DureeFormatteDeuxChiffresPipe, FormatterNombreUnitesMiliersMillionsPipe, I18nPluralPipe, TooltipComponent],
  templateUrl: './tableau-chansons.component.html',
  styleUrl: './tableau-chansons.component.css'
})
export class TableauChansonsComponent {
  @Input() chansons: Chanson[] = [];

  tooltipNbLecturesMessage: { [k: string]: string } = {
    '=0': 'Aucune lecture',
    '=1': '1 lecture',
    'other': '# lectures'
  };

  // classes conditionnelles en fonction du nombre de lectures
  classesChanson(chanson: Chanson) {
    return ({
      'populaire': chanson.nombreLecture > 5000, // nombre de lectures > 5000
      'impopulaire': chanson.nombreLecture < 100 // nombre de lectures < 100
    })
  }

  displayedColumns: string[] = ['index', 'titre', 'artiste', 'duree', 'nombreLecture'];
  dataSource!: MatTableDataSource<Chanson>;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['chansons']) {
      this.dataSource = new MatTableDataSource(changes['chansons'].currentValue);
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.chansons);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
