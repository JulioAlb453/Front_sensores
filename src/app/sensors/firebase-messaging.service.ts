// src/app/firebase-messaging.service.ts
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseMessagingService {
  currentMessage = new BehaviorSubject<any>(null);
  backUrl = 'htpp://localhost:8080';

  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private http: HttpClient
  ) {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: environment.firebaseConfig.apiKey,
        authDomain: environment.firebaseConfig.authDomain,
        projectId: environment.firebaseConfig.projectId,
        messagingSenderId: environment.firebaseConfig.messagingSenderId,
        appId: environment.firebaseConfig.appId,
      });
    }
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        // console.log('Token: ', token);
        if (token) {
          this.subscribeToTopic(token, 'sensor_alert');
        }
      },

      (error) => {
        console.error(error);
      }
    );
  }

  subscribeToTopic(token: string, topic: string) {
    const url = `${this.backUrl}/webhook`;
    const body = { token, topic };
    console.log(body);
    return this.http.post(url, body);
  }

  sendNotification(token: string, title: string, body: string) {
    const url = `${this.backUrl}/send-notification`;
    const payload = { token, title, body };

    return this.http.post(url, payload);
  }

  listen() {
    this.angularFireMessaging.messages.subscribe((message) => {
      console.log('Mensaje recibido:', message);
      this.currentMessage.next(message);
    });
  }
}
