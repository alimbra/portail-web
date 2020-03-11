import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { UtilisateurService } from '../service/utilisateur.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isAdmin:boolean = false;
  isEmploye:boolean = false;
  constructor(private breakpointObserver: BreakpointObserver,
    private userService:UtilisateurService,
    private authentification:AuthentificationService,private router:Router ) {
      let uid = localStorage.getItem('uid');


      this.userService.getUtilisateur(uid).subscribe((user)=>{
        
        if(user.data().role=='admin'){
          this.isAdmin = true;
        }
        else{
          this.isAdmin = false;
        }

        if(user.data().role=='employe'){
          this.isEmploye = true;
        }
        else{
          this.isEmploye = false;
        }

      });
    }
  
  logout() {
    this.authentification.logout().then(()=>{
      this.router.navigate(['/login']);
    }).catch(() =>{
      console.log("erreur")
    });
  }
}
