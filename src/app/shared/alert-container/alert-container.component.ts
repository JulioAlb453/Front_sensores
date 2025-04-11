import { Component } from '@angular/core';
import { AlertService } from '../../sensors/service/alert-service.service';
import { AlertComponent } from '../alert/alert.component';
import { CommonModule } from '@angular/common';
import { AlertType } from '../alert/alert.component';

@Component({
  selector: 'app-alert-container',
  imports: [CommonModule, AlertComponent],
  templateUrl: './alert-container.component.html',
  styleUrl: './alert-container.component.css',
})
export class AlertContainerComponent {
  currentAlert: { type: AlertType, message: string, visible: boolean } = { type: 'info', message: '', visible: false };

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.currentAlert$.subscribe(alert => {
      this.currentAlert = alert;
    });
  }

  onClose(): void {
    this.alertService.hideAlert();
  }
}
