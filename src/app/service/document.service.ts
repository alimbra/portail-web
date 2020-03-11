import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Section } from '../section';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private afs:AngularFireStorage,private afstore:AngularFirestore
    ) { }

    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;
    uploadState: Observable<string>;
    uploadProgress: Observable<number>;
    downloadURL: Observable<string>;
    
  public storeFile(event):Observable<number>{

    const nom = event.target.files[0]['name'];
    this.ref = this.afs.ref(nom);
    this.task = this.ref.put(event.target.files[0]);

    return this.task.percentageChanges();

  }

  public getStoredFiles(nom:string){

    return this.afs.storage.ref(nom).getDownloadURL();
  }


  public addDocument(section:Section) {
    return this.afstore.collection<Section>('documents').add(section);
  }

  public documents():Observable<Section[]> {
    return this.afstore.collection<Section>('documents').valueChanges({});
  }
}
