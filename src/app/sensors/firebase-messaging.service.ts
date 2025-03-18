// src/app/firebase-messaging.service.ts
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseMessagingService {
  currentMessage = new BehaviorSubject<any>(null);

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
        console.log('Token: ', token);
        if (token) {
          this.subscribeToTopic(token, 'sensor_alert');
        }
      },

      (error) => {
        console.error(error);
      }
    );
  }


  subscribeToTopic(topic: string, token: string) {
    const url =
      'https://idd.googleapis.com/d/v1/' + token + 'rel/topic/' + topic;
    const headers = {
      Authorization: environment.firebaseConfig.apiKey,
    };

    this.http.post(url, {}, { headers }).subscribe(
      () => {
        console.log('Subscribed to topic:', topic);
      },
      (error) => {
        console.error('Error subscribing to topic:', error);
      }
    );
  }

  listen() {
    console.log('Listen function is running');
    this.angularFireMessaging.messages.subscribe((message) => {
      console.log('Message received in service:', message);
      this.currentMessage.next(message);
    });
  }
}
