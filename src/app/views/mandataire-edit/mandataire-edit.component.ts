import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mandataire-edit',
  templateUrl: './mandataire-edit.component.html',
  styleUrls: ['./mandataire-edit.component.css']
})
export class MandataireEditComponent {
  constructor(private route: ActivatedRoute, private afs: FirestoreService, private router: Router) { }
  id: any
  mandataire: any
  modalShowed: boolean = false
  mandataireForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    renewDate: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  })
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.afs.getCollectionDoc('mandataires', this.id).subscribe(doc => {
      this.mandataire = doc
      this.mandataireForm.patchValue({
        firstName: doc.firstName,
        lastName: doc.lastName,
        duration: doc.duration,
        renewDate: doc.renewDate,
        phone: doc.phone,
      })
    })
  }

  editMandataire() {
    this.afs.updateCollectionDoc('mandataires', this.id, this.mandataireForm.value)
    this.modalShowed = true
  }

  closeModal() {
    this.router.navigate(['mandataires'])
  }
}
