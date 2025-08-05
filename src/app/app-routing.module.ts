import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgetpass', component: ForgetpasswordComponent },
  { path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'contact', component: ContactusComponent },
      { path: '', redirectTo: 'contact', pathMatch: 'full' }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
