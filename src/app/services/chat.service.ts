import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, orderBy, addDoc, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface FirestoreRec {
  userName: string;
  message: string;
  timestamp: Timestamp;
  color?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  mesg$: Observable<FirestoreRec[]>;

  constructor(private firestore: Firestore) {
    const aCollection = collection(this.firestore, 'cs336-chat');
    const q = query(aCollection, orderBy('timestamp'));
    this.mesg$ = collectionData<FirestoreRec>(q);
  }

  submitNewMessage(message: string, userName: string, color: string) {
    const aCollection = collection(this.firestore, 'cs336-chat');
    return addDoc(aCollection, {
      userName,
      message,
      timestamp: new Date(),
      color
    });
  }
}