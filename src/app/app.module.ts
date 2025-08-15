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
import { CameraComponent } from './pages/camera/camera.component';
import { ChairComponent } from './pages/chair/chair.component';
import { LaptopComponent } from './pages/laptop/laptop.component';
import { GirlComponent } from './pages/girl/girl.component';
import { BoyComponent } from './pages/boy/boy.component';
import { RorbiComponent } from './pages/rorbi/rorbi.component';
import { MariusComponent } from './pages/marius/marius.component';
import { PulvinarComponent } from './pages/pulvinar/pulvinar.component';
import { FusceComponent } from './pages/fusce/fusce.component';
import { FreezerComponent } from './pages/freezer/freezer.component';
import { SoundbarComponent } from './pages/soundbar/soundbar.component';
import { TechbudsComponent } from './pages/techbuds/techbuds.component';
import { ThunderComponent } from './pages/thunder/thunder.component';
import { VariusComponent } from './pages/varius/varius.component';
import { WatchComponent } from './pages/watch/watch.component';
import { BluesofaComponent } from './pages/bluesofa/bluesofa.component';
import { PhaseComponent } from './pages/phase/phase.component';
import { YellowsofaComponent } from './pages/yellowsofa/yellowsofa.component';
import { BrownsofaComponent } from './pages/brownsofa/brownsofa.component';
import { AppleComponent } from './pages/apple/apple.component';
import { ChairuComponent } from './pages/chairu/chairu.component';
import { SedtempuComponent } from './pages/sedtempu/sedtempu.component';
import { DignissimComponent } from './pages/dignissim/dignissim.component';
import { PaqueComponent } from './pages/paque/paque.component';
import { BlackgownComponent } from './pages/blackgown/blackgown.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { ChainnComponent } from './pages/chainn/chainn.component';
import { EarringsComponent } from './pages/earrings/earrings.component';
import { EarplugsComponent } from './pages/earplugs/earplugs.component';
import { RadioComponent } from './pages/radio/radio.component';
import { PowerbankComponent } from './pages/powerbank/powerbank.component';
import { CamComponent } from './pages/cam/cam.component';
import { HeadsetComponent } from './pages/headset/headset.component';
import { CorbiComponent } from './pages/corbi/corbi.component';
import { Chair2Component } from './pages/chair2/chair2.component';
import { Chair3Component } from './pages/chair3/chair3.component';
import { LapComponent } from './pages/lap/lap.component';
import { Dress1Component } from './pages/dress1/dress1.component';
import { RedgownComponent } from './pages/redgown/redgown.component';
import { RedComponent } from './pages/red/red.component';
import { CentComponent } from './pages/cent/cent.component';
import { Earrings2Component } from './pages/earrings2/earrings2.component';
import { Dress6Component } from './pages/dress6/dress6.component';
import { Dress7Component } from './pages/dress7/dress7.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    AboutComponent,
    AccessoriesComponent,
    AudioComponent,
    CameraComponent,
    ChairComponent,
    LaptopComponent,
    GirlComponent,
    BoyComponent,
    RorbiComponent,
    MariusComponent,
    PulvinarComponent,
    FusceComponent,
    FreezerComponent,
    SoundbarComponent,
    TechbudsComponent,
    ThunderComponent,
    VariusComponent,
    WatchComponent,
    BluesofaComponent,
    PhaseComponent,
    YellowsofaComponent,
    BrownsofaComponent,
    AppleComponent,
    ChairuComponent,
    SedtempuComponent,
    DignissimComponent,
    PaqueComponent,
    BlackgownComponent,
    ShoesComponent,
    ChainnComponent,
    EarringsComponent,
    EarplugsComponent,
    RadioComponent,
    PowerbankComponent,
    CamComponent,
    HeadsetComponent,
    CorbiComponent,
    Chair2Component,
    Chair3Component,
    LapComponent,
    Dress1Component,
    RedgownComponent,
    RedComponent,
    CentComponent,
    Earrings2Component,
    Dress6Component,
    Dress7Component
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
