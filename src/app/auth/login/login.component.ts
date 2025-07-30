import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword: boolean = false;
  rememberMe = false;
  error = '';

  showForgotSection = false;
  forgotEmail = '';
  resetMessage = '';
  resetError = '';

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    const remembered = localStorage.getItem('rememberedEmail');
    if (remembered) {
      this.email = remembered;
      this.rememberMe = true;
    }
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

    goToForgotPassword() {
    this.router.navigate(['/forgetpass']);
  }


  

  hideForgotPassword() {
    this.showForgotSection = false;
    this.resetMessage = '';
    this.resetError = '';
  }

  resetPassword() {
    if (!this.forgotEmail) {
      this.resetError = 'Please enter your email address.';
      this.resetMessage = '';
      return;
    }

    this.afAuth.sendPasswordResetEmail(this.forgotEmail)
      .then(() => {
        this.resetMessage = 'Password reset link sent to your email.';
        this.resetError = '';
      })
      .catch((error) => {
        this.resetError = error.message || 'Error sending reset email.';
        this.resetMessage = '';
      });
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        if (this.rememberMe) {
          localStorage.setItem('rememberedEmail', this.email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
        this.router.navigate(['/dashboard']);
      })

      .catch(err => {
        this.error = err.message;
        alert(this.error);
      });
  }

}