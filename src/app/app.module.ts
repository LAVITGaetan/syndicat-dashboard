import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { TopbarLeftComponent } from './views/topbar-left/topbar-left.component';
import { TopbarRightComponent } from './views/topbar-right/topbar-right.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment';
import { AdherentComponent } from './views/adherent/adherent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdherentEditComponent } from './views/adherent-edit/adherent-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
    TopbarLeftComponent,
    TopbarRightComponent,
    AdherentComponent,
    AdherentEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
