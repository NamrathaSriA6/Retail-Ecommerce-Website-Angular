import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../../environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    PagesComponent,
    NavbarComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
