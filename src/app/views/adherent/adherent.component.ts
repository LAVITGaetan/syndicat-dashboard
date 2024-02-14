import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css']
})
export class AdherentComponent {
  constructor(private afs: FirestoreService, private auth: AuthentificationService, private fireStorage: AngularFireStorage) { }
  selectedFile: any
  modalShowed: boolean = false
  modalText: string = ''
  adherentCollection: any
  formHidden = true
  adherentForm = new FormGroup({
    company: new FormControl('', Validators.required),
    activity: new FormControl('', Validators.required),
    section: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    created_at: new FormControl(''),
    logo: new FormControl(''),
  })

  ngOnInit() {
    this.auth.isLoggedIn()
    this.afs.getCollectionDocs('adherents').subscribe(docs => {
      console.log(docs.length);

      this.adherentCollection = docs
      console.log(this.adherentCollection);

    })
  }
  async addAdherent() {
    const now = new Date()
    const docId = this.adherentForm.get('company')?.value
    this.adherentForm.get('created_at')?.setValue(now.toLocaleDateString())
    if (docId != null) {
      if (this.selectedFile !== null) {
        const path = `adherents/${this.selectedFile.name}`
        const uploadTask = await this.fireStorage.upload(path, this.selectedFile)
        const url = await uploadTask.ref.getDownloadURL()
        console.log(url);
        this.adherentForm.get('logo')?.setValue(url)
      }
      this.afs.setToCollection('adherents', docId, this.adherentForm.value)

      this.modalText = 'Adhérent crée avec succés'
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

  editAdherent() {
    this.afs.updateCollectionDoc('adherents', 'JLFg90dOpMQyVDsKwkF0', { company: 'updated', section: 'artisanat' })
  }

  deleteAdherent(docId: string) {
    this.afs.deleteCollectionDoc('adherents', docId)
    this.modalText = 'Adhérent supprimé avec succés'
    this.modalShowed = true
  }

  closeModal() {
    this.modalShowed = false
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    this.selectedFile = file
  }

}
