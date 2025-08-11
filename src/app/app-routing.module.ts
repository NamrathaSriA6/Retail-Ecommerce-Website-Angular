import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PagesComponent } from './pages/pages.component';
import { ShopComponent } from './pages/shop/shop.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BestdealsComponent } from './pages/bestdeals/bestdeals.component';
import { NewproductsComponent } from './pages/newproducts/newproducts.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgetpass', component: ForgetpasswordComponent },
  { path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'contactus', component: ContactusComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'bestdeals', component: BestdealsComponent },
      { path: 'newproduct', component: NewproductsComponent },
      { path: '', redirectTo: 'contactus', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
