import { Injectable } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ActionSequence } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private afs:AngularFirestore) { }
  public utilisateurs(): Observable<Utilisateur[]> {
    return this.afs.collection<Utilisateur>('utilisateurs').valueChanges({ idField: 'id' });
  }
  
  public getUtilisateur(id:string):Observable<any> {

    return this.afs.collection<Utilisateur>('utilisateurs').doc(id).get();
  }
  
  public updateUtilisateur(utilisateur:Utilisateur):Promise<void>{
    console.log(utilisateur);
    

    return this.afs.collection<Utilisateur>('utilisateurs')
    .doc(utilisateur.id).update({
      "nom":utilisateur.nom,
      "prenom":utilisateur.prenom,
      "email":utilisateur.email,
      "photoUrl":utilisateur.photoUrl,
      "role":utilisateur.role
    });
  }
  
}
