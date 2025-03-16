// src/app/sensor1/sensor1-display/sensor1-display.component.ts
import { Component, OnInit } from '@angular/core';
import { FirebaseMessagingService } from '../../firebase-messaging.service';

@Component({
  selector: 'app-sensor1-display',
  standalone: false,
  templateUrl: './sensor1-display.component.html',
  styleUrls: ['./sensor1-display.component.css']
})
export class Sensor1DisplayComponent implements OnInit {
  message: any;

  constructor(private firebaseMessagingService: FirebaseMessagingService) { }

  ngOnInit(): void {
    this.firebaseMessagingService.requestPermission();
    this.firebaseMessagingService.listen();
    this.firebaseMessagingService.currentMessage.subscribe((message) => {
      this.message = message;
      console.log('Mensaje del Sensor 1:', message);
    });
  }
}