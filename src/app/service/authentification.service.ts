import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Utilisateur } from '../utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private afu:AngularFireAuth) { }

  public login(email:string, password:string): Promise<firebase.auth.UserCredential>{
    return this.afu.auth.signInWithEmailAndPassword(email,password)

  }
  public logout():Promise<void>{
    return this.afu.auth.signOut();
  }
  public user(): Observable<firebase.User>{
    return this.afu.user;
  }
  
  public addUser(email:string, password:string):Promise<firebase.auth.UserCredential>{
    return this.afu.auth.createUserWithEmailAndPassword(email,password);
  }
 
}
