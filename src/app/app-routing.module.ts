import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CorbiComponent } from './pages/corbi/corbi.component';
import { HeadsetComponent } from './pages/headset/headset.component';
import { CamComponent } from './pages/cam/cam.component';
import { PowerbankComponent } from './pages/powerbank/powerbank.component';
import { RadioComponent } from './pages/radio/radio.component';
import { EarplugsComponent } from './pages/earplugs/earplugs.component';
import { EarringsComponent } from './pages/earrings/earrings.component';
import { ChainnComponent } from './pages/chainn/chainn.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { Chair2Component } from './pages/chair2/chair2.component';
import { Chair3Component } from './pages/chair3/chair3.component';
import { LapComponent } from './pages/lap/lap.component';
import { Dress1Component } from './pages/dress1/dress1.component';
import { RedComponent } from './pages/red/red.component';
import { RedgownComponent } from './pages/redgown/redgown.component';
import { Dress6Component } from './pages/dress6/dress6.component';
import { Dress7Component } from './pages/dress7/dress7.component';
import { CentComponent } from './pages/cent/cent.component';
import { Earrings2Component } from './pages/earrings2/earrings2.component';



const routes: Routes = [
  { path: '', component: HomeComponent },           // Home page (default)
  { path: 'product', component: ProductDetailComponent }, // Product detail page
  { path: 'cart', component: CartComponent },        // Cart page
  { path: 'about', component:AboutComponent},
  { path:  'accessories', component:AccessoriesComponent},
  {path: 'audio', component:AudioComponent},
  {path: 'camera', component:CameraComponent},
  {path: 'chair', component:ChairComponent},
  {path: 'laptop', component:LaptopComponent},
  {path: 'girl', component:GirlComponent},
  {path: 'boy', component:BoyComponent},
  {path: 'rorbi', component:RorbiComponent},
  {path: 'marius', component:MariusComponent},
  {path: 'pulvinar', component:PulvinarComponent},
  {path: 'fusce', component:FusceComponent},
  {path: 'freezer',component:FreezerComponent},
  {path: 'soundbar', component:SoundbarComponent},
  {path: 'techbuds', component:TechbudsComponent},
  {path: 'thunder',component:ThunderComponent},
  {path: 'varius', component:VariusComponent},
  {path: 'watch',component:WatchComponent},
  {path: 'bluesofa', component:BluesofaComponent},
  {path: 'phase', component:PhaseComponent},
  {path: 'yellowsofa', component:YellowsofaComponent},
  {path: 'brownsofa', component:BrownsofaComponent},
  {path: 'apple', component:AppleComponent},
  {path: 'chairu', component:ChairuComponent},
  {path: 'sedtempu', component:SedtempuComponent},
  {path: 'dignissim', component:DignissimComponent},
  {path: 'paque', component:PaqueComponent},
  {path: 'blackgown', component:BlackgownComponent},
  {path: 'corbi', component:CorbiComponent},
  {path: 'headset', component:HeadsetComponent },
  {path: 'cam', component:CamComponent},
  {path: 'powerbank', component:PowerbankComponent},
  {path: 'radio', component:RadioComponent},
  {path: 'earplugs', component:EarplugsComponent},
  {path: 'earrings', component:EarringsComponent},
  {path: 'chainn', component:ChainnComponent },
  {path: 'shoes', component:ShoesComponent},
  {path: 'chair2', component:Chair2Component},
  {path: 'chair3', component:Chair3Component},
  {path: 'lap', component:LapComponent},
  {path: 'dress1', component:Dress1Component},
  {path: 'red', component:RedComponent},
  {path: 'redgown', component:RedgownComponent},
  {path: 'dress6', component:Dress6Component},
  {path: 'dress7', component:Dress7Component},
  {path: 'cent', component:CentComponent},
  {path: 'earrings2',component:Earrings2Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
