import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-adherent-edit',
  templateUrl: './adherent-edit.component.html',
  styleUrls: ['./adherent-edit.component.css']
})
export class AdherentEditComponent {

  constructor(private route: ActivatedRoute, private afs: FirestoreService, private router: Router, private auth : AuthentificationService) { }
  id: any
  adherent: any
  modalShowed: boolean = false
  adherentForm = new FormGroup({
    activity: new FormControl('', Validators.required),
    section: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  })
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.afs.getCollectionDoc('adherents', this.id).subscribe(doc => {
      this.adherent = doc
      this.adherentForm.patchValue({
        activity: doc.activity,
        section: doc.section,
        email: doc.email,
        phone: doc.phone,
      })
    })
  }

  editAdherent() {
    this.afs.updateCollectionDoc('adherents', this.id, this.adherentForm.value)
    this.modalShowed = true
  }

  closeModal() {
    this.router.navigate(['adherents'])
  }

}
