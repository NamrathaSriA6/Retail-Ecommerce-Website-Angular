import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms'



import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { AudioComponent } from './pages/audio/audio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    AboutComponent,
    AccessoriesComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
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
