import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-topbar-right',
  templateUrl: './topbar-right.component.html',
  styleUrls: ['./topbar-right.component.css']
})
export class TopbarRightComponent {
constructor(private auth : AuthentificationService) {}

logout() {
  this.auth.logout()
}
}
