import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private auth: AngularFireAuth, private router: Router) { }
  userId: string = 'undefined'

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
      this.userId = userCredentials.user?.uid || 'undefined';
    })
  }

  logout() {
    this.userId = 'undefined'
    this.router.navigate([''])
    return this.auth.signOut()
  }

  isLoggedIn() {
    if (this.userId !== 'undefined') {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }

}
