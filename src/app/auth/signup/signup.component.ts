import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email = '';
  password = '';
  showPassword: boolean = false;
  rememberMe = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  signup() {
    
    this.authService.signup(this.email, this.password)
      .then(userCred => {
        return this.authService.saveUserToDatabase(userCred.user.uid, this.email);
      })
      .then(() => {
        alert('Account created!');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert(err.message);
      });
  }
}
