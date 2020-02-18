import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { Utilisateur } from 'src/app/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private afu:AngularFireAuth,private afs:AngularFirestore) { }

  public login(email:string, password:string): Promise<firebase.auth.UserCredential>{
    return this.afu.auth.signInWithEmailAndPassword(email,password)

  }
  public logout():Promise<void>{
    return this.afu.auth.signOut();
  }
  public user(): Observable<firebase.User>{
    return this.afu.user;
  }
  public utilisateurs(): Observable<Utilisateur[]> {
    return this.afs.collection<Utilisateur>('utilisateurs').valueChanges();
  }
 
}
