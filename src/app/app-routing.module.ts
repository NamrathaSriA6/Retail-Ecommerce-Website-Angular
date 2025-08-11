import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { AudioComponent } from './pages/audio/audio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },           // Home page (default)
  { path: 'product', component: ProductDetailComponent }, // Product detail page
  { path: 'cart', component: CartComponent },        // Cart page
  { path: 'about', component:AboutComponent},
  { path:  'accessories', component:AccessoriesComponent},
  {path: 'audio', component:AudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
