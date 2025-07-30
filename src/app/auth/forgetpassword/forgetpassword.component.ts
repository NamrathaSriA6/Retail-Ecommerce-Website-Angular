import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: false,
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  email = '';
  newPassword = '';
  confirmPassword = '';
  step = 1;
  error = '';
  message = '';
  uid = '';

  constructor(private db: AngularFireDatabase, private router: Router) {}

  checkEmail() {
    this.error = '';
    this.message = '';

    this.db.list('/users', ref => ref.orderByChild('email').equalTo(this.email))
      .snapshotChanges()
      .subscribe(users => {
        if (users.length > 0) {
          this.uid = users[0].key || '';
          this.step = 2;
        } else {
          this.error = 'Email not found in our database.';
        }
      });
  }

  // Rename this to match your old method name if needed
  updatePasswordManually() {
    this.error = '';
    this.message = '';

    if (this.newPassword !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    if (!this.uid) {
      this.error = 'User ID not found.';
      return;
    }

    this.db.object(`/users/${this.uid}`).update({ password: this.newPassword })
      .then(() => {
        this.message = 'Password updated successfully!';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      })
      .catch(err => {
        this.error = 'Failed to update password: ' + err.message;
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

