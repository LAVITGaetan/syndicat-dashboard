import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthentificationService) { }
  loginForm = new FormGroup({
    email: new FormControl('adminsyndic@mail.re', [Validators.required, Validators.email]),
    password: new FormControl('Somesecuredpassword', [Validators.required]),
  });

  login() {

    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      if (email && password)
        this.auth.login(email, password)
    }
  }
}
