import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.scss']
})
export class AjoutUtilisateurComponent implements OnInit {

  addUtilisateurForm = this.fb.group({
    id:'',
    nom:'',
    prenom:'',
    motdepasse:'',
    email:'',
    role:'',
    photoUrl:''
  })
  constructor(private fb:FormBuilder,private authenticationService:AuthentificationService,
    private utilisateurService:UtilisateurService) { }

  ngOnInit() {
  }

  onSubmit() {

    if(!this.addUtilisateurForm.invalid){
      this.authenticationService.
      addUser(this.addUtilisateurForm.value.email,this.addUtilisateurForm.value.motdepasse)
      .then( (user)=> {
        console.log("success");
        this.addUtilisateurForm.value.id = user.user.uid; 
        
    
      }).catch((error)=>{
        console.log("unsuccess");
        console.log(error);
        

      }).finally(() =>{
        this.utilisateurService.updateUtilisateur(this.addUtilisateurForm.value)
        .then( () =>{
          console.log("success mise a jour");
          
        }).catch( (error) => {
          console.log(error);
          
        }); 
      });
      
    }
  }

}
