import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private db: Database) {}

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signup(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  saveUserToDatabase(uid: string, email: string) {
    const userRef = ref(this.db, `users/${uid}`);
    return set(userRef, { email });
  }

}
