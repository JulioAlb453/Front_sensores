import { Component, OnInit } from '@angular/core';
import { FirebaseMessagingService } from '../../firebase-messaging.service';

@Component({
  selector: 'app-sensor2-display',
  standalone: false,
  templateUrl: './sensor2-display.component.html',
  styleUrls: ['./sensor2-display.component.css']
})
export class Sensor2DisplayComponent implements OnInit {
  message: any;

  constructor(private firebaseMessagingService: FirebaseMessagingService) { }

  ngOnInit(): void {
    this.firebaseMessagingService.requestPermission();
    this.firebaseMessagingService.listen();
    this.firebaseMessagingService.currentMessage.subscribe((message) => {
      this.message = message;
      console.log('Mensaje del Sensor 2:', message);
    });
  }
}