import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private afs: FirestoreService, private auth: AuthentificationService, private router: Router) { }
  adherent_count: number = 0
  mandataire_count: number = 0
  adherents: any
  ngOnInit() {

    
    this.afs.getCollectionDocs('adherents').subscribe(docs => {
      this.adherent_count = docs.length
      this.adherents = docs
    })
    this.afs.getCollectionDocs('mandataires').subscribe(docs => {
      this.mandataire_count = docs.length
    })

  }

}
