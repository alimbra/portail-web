import { Injectable } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private afs:AngularFirestore) { }
  public utilisateurs(): Observable<Utilisateur[]> {
    return this.afs.collection<Utilisateur>('utilisateurs').valueChanges();
  }
}
