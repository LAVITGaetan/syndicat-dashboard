import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-mandataire',
  templateUrl: './mandataire.component.html',
  styleUrls: ['./mandataire.component.css']
})
export class MandataireComponent {
 
    constructor(private afs: FirestoreService, private auth : AuthentificationService) { }
    modalShowed : boolean = false
    modalText : string = ''
    mandataireCollection: any
    formHidden = true
    mandataireForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      renewDate: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      created_at: new FormControl(''),
    })
  
    ngOnInit() {
      this.auth.isLoggedIn()
      this.afs.getCollectionDocs('mandataires').subscribe(docs => {
        this.mandataireCollection = docs
        console.log(this.mandataireCollection);
  
      })
    }
    addMandataire() {
      const now = new Date()
      const docId = this.mandataireForm.get('email')?.value
      this.mandataireForm.get('created_at')?.setValue(now.toLocaleDateString())
      if (docId != null) {
        this.afs.setToCollection('mandataires', docId, this.mandataireForm.value)
        this.modalText = 'Mandataire crée avec succés'
        this.modalShowed = true
        this.showForm()
      }
  
    }
  
    showForm() {
      document.getElementsByClassName('hidden-form')[0].classList.toggle('form')
      if (this.formHidden) {
        this.formHidden = false
      } else {
        this.formHidden = true
      }
    }
  
    editMandataire() {
      this.afs.updateCollectionDoc('mandataires', 'JLFg90dOpMQyVDsKwkF0', { company: 'updated', section: 'artisanat' })
    }
  
    deleteMandataire(docId: string) {
      this.afs.deleteCollectionDoc('mandataires', docId)
      this.modalText = 'Mandataire supprimé'
      this.modalShowed = true
    }
  
    closeModal() {
      this.modalShowed = false
    }
  
  }
  
