import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-actualite',
  templateUrl: './ajout-actualite.component.html',
  styleUrls: ['./ajout-actualite.component.scss']
})
export class AjoutActualiteComponent implements OnInit {

  publicationForm = this.fb.group({
    titre:['',[Validators.required,]],
    contenu:['',[Validators.required,Validators.minLength(10)] ],
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit() { 
  }

  onSumbit(){
    if (this.publicationForm.invalid) {
      console.log(this.publicationForm.status);  // false
  
    }
    else{
      console.log(this.publicationForm.status);  // true
      /*
        this.authentification.login(this.loginForm.value.email,this.loginForm.value.motdepasse)
        .then(()=>{
          this.router.navigate(['/accueil']);
        }
        ).catch(() =>{
          console.log("erreur")
        });
      */ 
    }
  
  }

}
