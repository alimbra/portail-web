import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  user: Observable<User>;
  title = 'application';
  constructor(db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.items = db.collection('items').valueChanges();

  }
}
