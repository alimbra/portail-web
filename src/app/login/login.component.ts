import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import { FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    motdepasse:['',[Validators.required,Validators.minLength(5)] ],
  });

  constructor(private fb:FormBuilder,private authentification:AuthentificationService,private router:Router) {

  }

  ngOnInit() {

  }
  onSubmit(){

    if (this.loginForm.invalid) {
      console.log(this.loginForm.status);  // false

    }
    else{
      console.log(this.loginForm.status);  // true
      this.authentification.login(this.loginForm.value.email,this.loginForm.value.motdepasse)
      .then(()=>{
        this.router.navigate(['/accueil']);
      }
      ).catch(() =>{
        console.log("erreur")
      });
      
    }
  }


}
