import { Component, Inject } from '@angular/core';
import { ListeService } from '../../services/liste.service';
import {  MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Liste } from '../../interfaces/liste';

@Component({
  selector: 'app-confirmation-suppression-liste',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule],
  templateUrl: './confirmation-suppression-liste.component.html',
  styleUrl: './confirmation-suppression-liste.component.css'
})
export class ConfirmationSuppressionListeComponent {
  constructor(private listeService: ListeService, public dialogRef: MatDialogRef<ConfirmationSuppressionListeComponent>, @Inject(MAT_DIALOG_DATA) public data: Liste) {
    this.liste = data;
  }

  liste: Liste;

  supprimerListe() {
    this.listeService.supprimerListe(this.liste.id).subscribe(res => {
        this.dialogRef.close(res.message);
      });
  }
}
