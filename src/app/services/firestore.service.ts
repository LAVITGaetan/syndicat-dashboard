import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  addToCollection(collectionName: string, documentData: any) {
    this.db.collection(collectionName).add(documentData)
  }

  setToCollection(collectionName: string, docId: string, documentData: any) {
    this.db.collection(collectionName).doc(docId).set(documentData)
  }

  getCollectionDocs(collectionName: string): Observable<any[]> {
    return this.db.collection(collectionName).valueChanges().pipe(
    )
  }


  getCollectionDoc(collectionName: string, docId: string): Observable<any> {
    return this.db.collection(collectionName).doc(docId).valueChanges().pipe(
    )
  }

  updateCollectionDoc(collectionName: string, docId: string, data: any) {
    this.db.collection(collectionName).doc(docId).update(data)
  }

  deleteCollectionDoc(collectionName: string, docId: string) {
    this.db.collection(collectionName).doc(docId).delete()
  }
}
