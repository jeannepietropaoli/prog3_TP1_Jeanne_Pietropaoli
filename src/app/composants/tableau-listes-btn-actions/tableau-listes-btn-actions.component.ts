import { Component, inject, Input, SimpleChanges, ViewChild } from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import { Liste } from '../../interfaces/liste';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireListeComponent } from '../formulaire-liste/formulaire-liste.component';
import { ListeService } from '../../services/liste.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmationSuppressionListeComponent } from '../confirmation-suppression-liste/confirmation-suppression-liste.component';

@Component({
  selector: 'app-tableau-listes-btn-actions',
  standalone: true,
  imports: [MatSort, MatSortModule, MatTableModule, MatIconModule],
  templateUrl: './tableau-listes-btn-actions.component.html',
  styleUrl: './tableau-listes-btn-actions.component.css'
})
export class TableauListesBtnActionsComponent {
  constructor(private listeService: ListeService, private dialog: MatDialog) { }

  listes: Liste[] = [];

  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.getListes();
  }

  getListes() : void {
    this.listeService.getListesPubliquesEtPrivees()
      .subscribe(res => {
        this.listes = res.listes;
        this.dataSource = new MatTableDataSource(this.listes);
        this.dataSource.sort = this.sort;
      })
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['listes']) {
      this.dataSource = new MatTableDataSource(changes['listes'].currentValue);
      this.dataSource.sort = this.sort;
    }
  }

  displayedColumns: string[] = ['id', 'titre', 'sousTitre', 'image', 'description', 'type', 'verifie', 'datePublication', 'visibilite', 'nombreSauvegardes', 'actions'];
  
  dataSource!: MatTableDataSource<Liste>;

  @ViewChild(MatSort) sort!: MatSort;

  openDialogFormulaire(liste?: Liste) {
    const listeCopie = liste ? {...liste} : undefined; // copie, permet de ne pas partager le meme objet entre le parent (tableau) et enfant (formulaire) et de ne pas voir les modifications du formulaire en live dans le tableau avant d avoir valide le tout.
    const dialogRef = this.dialog.open(FormulaireListeComponent, {
      data: listeCopie
    })

    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this._snackBar.open(res, undefined, {
          duration: 2000
        })
        this.getListes();
      }
    })
  }

  openDialogSuppression(liste: Liste) {
    const dialogRef = this.dialog.open(ConfirmationSuppressionListeComponent, {
      data: liste
    })

    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this._snackBar.open(res, undefined, {
          duration: 2000
        })
        this.getListes();
      }
    })
  }
}
