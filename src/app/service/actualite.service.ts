import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Actualite } from '../actualite';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private afs:AngularFirestore) { }

  public actualites():Observable<Actualite[]> {
    return this.afs.collection<Actualite>('actualites').valueChanges();
  }
}
