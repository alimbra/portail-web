import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  utilisateurs: Utilisateur[];
  isAdmin: boolean;

  constructor(private utilisateurService: UtilisateurService) {
    this.utilisateurService.utilisateurs().subscribe( (users) => {
      this.utilisateurs = users;
    });


    const uid = localStorage.getItem('uid');
    this.utilisateurService.getUtilisateur(uid).subscribe((user) => {

      if (user.data().role === 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });

  }
  ngOnInit() {
  }

}
