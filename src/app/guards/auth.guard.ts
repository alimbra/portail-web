import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../service/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private utilisateurService:UtilisateurService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let uid = localStorage.getItem('uid');
      let role = localStorage.getItem('role');
      
      let roleUser = '';
      if(uid == undefined){
        this.router.navigate(['/login']);

        return false;
      }      
      if(role == 'admin'){
        return true;
      }
      this.router.navigate(['/accueil']);

      return false;
      
  }
  hasCustomClaim(){
    let role;
    this.utilisateurService.getUtilisateur(localStorage.getItem('uid')).subscribe( (user)=>{
      role = user.role;
    })
    
    if(role = 'admin'){
      return true;
    }
    else{
      this.router.navigate(['/accueil']);
      return false;
    }
  }
  
}
