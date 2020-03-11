import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Actualite } from '../actualite';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private afs: AngularFirestore) { }

  public actualites(): Observable<Actualite[]> {
    return this.afs.collection<Actualite>('actualites').valueChanges();
  }
  public addActualite(actualite: Actualite): Promise<DocumentReference> {
    return this.afs.collection<Actualite>('actualites').add(actualite);
  }


}
