import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UpdateUtilisateurComponent } from '../update-utilisateur/update-utilisateur.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  private updateDialog: MatDialogRef<UpdateUtilisateurComponent>;
  dialogStatus = 'inactive';

  @Input()
  utilisateur :Utilisateur;
  
  @Input()
  isAdmin:boolean;
  
  constructor( public dialog: MatDialog) {}

  ngOnInit() {
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.updateDialog = this.dialog.open(UpdateUtilisateurComponent, {
      width: '450px',
      data: {utilisateur:this.utilisateur}
    });

    this.updateDialog.afterClosed().subscribe((person) => { });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.updateDialog.close();
  }

}
