import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.scss']
})
export class UpdateUtilisateurComponent implements OnInit {

  
  updateUtilisateurForm = this.fb.group({

    nom:'',
    prenom:'',
    email:'',
    role:'',
    photoUrl:''
  })

  constructor(private fb:FormBuilder,private actiroute:ActivatedRoute,
    private utilisateurService:UtilisateurService) { }
  
  ngOnInit() {

    let userId = '';
    this.actiroute.params.subscribe(params => {
      userId = params['id'];
      console.log(userId);
    });
    this.utilisateurService.getUtilisateur(userId).subscribe(user =>{
      
      this.updateUtilisateurForm = this.fb.group({
        id:userId,
        nom:user.data().nom,
        prenom:user.data().prenom,
        email:user.data().email,
        role:user.data().role, 
        photoUrl:user.data().photoUrl
      })

    });

  }

  onSubmit(){
    if(!this.updateUtilisateurForm.invalid){

      this.utilisateurService.updateUtilisateur(this.updateUtilisateurForm.value).then(()=>{
        console.log('success');
      })
      .catch(()=>{
        console.log("unsucess");
      });
    }
  }

}
