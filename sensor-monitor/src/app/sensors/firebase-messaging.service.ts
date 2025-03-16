// src/app/firebase-messaging.service.ts
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessagingService {
  currentMessage = new BehaviorSubject<any>(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging: any) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    );
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  listen() {
    console.log("Listen function is running")
    this.angularFireMessaging.messages.subscribe((message) => {
      console.log("Message received in service:", message);
      this.currentMessage.next(message);
    });
  }
}