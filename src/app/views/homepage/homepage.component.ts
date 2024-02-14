import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private afs: FirestoreService) { }
  adherent_count: number = 0
  adherents : any
  ngOnInit() {
    this.afs.getCollectionDocs('adherents').subscribe(docs => {
      this.adherent_count = docs.length
      this.adherents = docs
    })

    
  }

}
