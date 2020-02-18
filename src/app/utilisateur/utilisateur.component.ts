import { Component, OnInit, Input } from '@angular/core';
import { UtilisateurService } from 'service/utilisateur.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  @Input()
  utilisateur :Utilisateur;
  
  ngOnInit() {
  }

}
