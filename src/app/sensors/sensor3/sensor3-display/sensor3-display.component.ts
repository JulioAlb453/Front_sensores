import { Component, OnInit } from '@angular/core';
import { FirebaseMessagingService } from '../../firebase-messaging.service';

@Component({
  selector: 'app-sensor3-display',
  standalone: false,
  templateUrl: './sensor3-display.component.html',
  styleUrls: ['./sensor3-display.component.css']
})
export class Sensor3DisplayComponent implements OnInit {
  message: any;

  constructor(private firebaseMessagingService: FirebaseMessagingService) { }

  ngOnInit(): void {
    this.firebaseMessagingService.requestPermission();
    this.firebaseMessagingService.listen();
    this.firebaseMessagingService.currentMessage.subscribe((message) => {
      this.message = message;
      console.log('Mensaje del Sensor 3:', message);
    });
  }
}