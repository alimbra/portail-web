import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.scss']
})
export class UpdateUtilisateurComponent implements OnInit {
  /*@Output('cancel') cancel$: EventEmitter<any>;
  @Output('personAdd') add$: EventEmitter<any>;*/

  updateUtilisateurForm = this.fb.group({

    nom: ['', [Validators.required, Validators.minLength(3)]],
    prenom: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    role: '',
    telephone:['', [Validators.required, Validators.minLength(12)]],
    photoUrl: ['', [Validators.required]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,
              private fb: FormBuilder,
              private utilisateurService: UtilisateurService,
              public dialogRef: MatDialogRef<UpdateUtilisateurComponent>) {
     // this.add$ = new EventEmitter();
     // this.cancel$ = new EventEmitter();
  }

  get f() { return this.updateUtilisateurForm.controls; }

  ngOnInit() {
    const userID = this.data.utilisateur.id;

    this.utilisateurService.getUtilisateur(userID).subscribe(user => {
      this.updateUtilisateurForm = this.fb.group({
        id: [userID, Validators.required],
        nom: [user.data().nom, [Validators.required, Validators.minLength(3)]],
        prenom: [user.data().prenom, [Validators.required, Validators.minLength(3)]],
        email: [user.data().email, [Validators.required, Validators.email]],
        telephone:[user.data().telephone, [Validators.required, Validators.minLength(12)]],
        role: [user.data().role, Validators.required],
        photoUrl: [user.data().photoUrl, Validators.required]
        
      });
    });

  }

  onSubmit() {
    console.log(this.updateUtilisateurForm.value);

    this.utilisateurService.updateUtilisateur(this.updateUtilisateurForm.value).then(() => {
        console.log('success');
        this.closeDialog();

      })
      .catch(() => {
        console.log('unsucess');
        this.closeDialog();

      });

  }
  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  cancel() {
    this.closeDialog();
  }

  save() {
    this.closeDialog();

  }


}
