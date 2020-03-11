import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { AdminComponent } from './admin/admin.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo,
   redirectLoggedInTo, AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AjoutActualiteComponent } from './ajout-actualite/ajout-actualite.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { MatOption, MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {  AuthGuard } from './guards/auth.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentsComponent } from './documents/documents.component';
import { AjoutDocumentComponent } from './ajout-document/ajout-document.component';
import { DocumentComponent } from './document/document.component';

const adminOnly = () => {hasCustomClaim('admin'); };
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['actualites']);

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'admin', component: AdminComponent, canActivate: [AngularFireAuthGuard]},
    { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'accueil', component: AccueilComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'utilisateurs', component: UtilisateursComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'actualites', component: ActualitesComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'ajoutActualite', component: AjoutActualiteComponent, canActivate: [AuthGuard] },
    { path: 'updateutilisateur/:id', component: UpdateUtilisateurComponent, canActivate: [AuthGuard] },
    { path: 'documents', component: DocumentsComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'ajoutdocument', component: AjoutDocumentComponent, canActivate: [AuthGuard] },

    { path: '**', component: AccueilComponent, canActivate: [AngularFireAuthGuard]},


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    NavigatorComponent,
    AdminComponent,
    UtilisateurComponent,
    UtilisateursComponent,
    DashboardComponent,
    ActualitesComponent,
    ActualiteComponent,
    AjoutActualiteComponent,
    UpdateUtilisateurComponent,
    DocumentsComponent,
    AjoutDocumentComponent,
    DocumentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatOptionModule, MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),

    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireAuthGuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
