import { Component, Inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOption } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {  MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeService } from '../../services/liste.service';
import { Liste } from '../../interfaces/liste';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-formulaire-liste',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule, MatRadioModule, MatOption, MatSelectModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogClose, MatDialogContent, MatDialogActions],
  providers: [],
  templateUrl: './formulaire-liste.component.html',
  styleUrl: './formulaire-liste.component.css'
})
export class FormulaireListeComponent {
  constructor(private listeService: ListeService, public dialogRef: MatDialogRef<FormulaireListeComponent>, @Inject(MAT_DIALOG_DATA) public data: Liste) {
    if (data) {
      this.liste = data;
    } else {
      this.liste = {
        titre: '',
        sousTitre: '',
        image: '',
        description: '',
        type: 'Liste de lecture',
        verifie: false,
        datePublication: '',
        visibilite: false,
        nombreSauvegardes: 0,
        chansons: []
      }
    }
  }

  liste: Liste;

  dateActuelle = new Date();

  ajouterListe(listeForm: NgForm) {
    if (listeForm.valid) {
      this.listeService.ajouterListe(this.liste).subscribe(res => {
          listeForm.resetForm();
          this.dialogRef.close(res.message);
        });
    }
  }

  editerListe(listeForm: NgForm) {
    if(listeForm.valid) {
      this.listeService.editerListe(this.liste).subscribe(res => {
        listeForm.resetForm();
        this.dialogRef.close(res.message)
      })
    }
  }


}
