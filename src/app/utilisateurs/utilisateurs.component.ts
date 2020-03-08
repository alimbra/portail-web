import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  utilisateurs:Utilisateur[];
  constructor(private utilisateurService:UtilisateurService) { 
    this.utilisateurService.utilisateurs().subscribe( (users)=>{
      //console.log(users);
      this.utilisateurs = users;
    });

  }
  ngOnInit() {
  }

}
