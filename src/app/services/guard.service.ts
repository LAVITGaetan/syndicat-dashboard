import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthentificationService,private router: Router) { }

  canActivate(): boolean {
    if (this.auth.userLogged$.value) {
      return true
    } else {
      this.router.navigate([''])
      alert('Connectez-vous pour accéder à cette page')
      return false
    }
  }
}
