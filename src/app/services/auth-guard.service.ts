import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthentificationService, private router: Router) { }


}
