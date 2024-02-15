import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private auth: AngularFireAuth, private router: Router) { }
  userLogged$ = new BehaviorSubject(false)

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then((userCrendentials) => {
      if (userCrendentials.user) {
        this.userLogged$.next(true)
        this.router.navigate(['/accueil'])
        return true
      } else {
        return false
      }

    })
  }

  logout() {
    return this.auth.signOut()
  }

}
