import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertType } from '../../shared/alert/alert.component';

interface Alert {
  type: AlertType;
  message: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<Alert>({
    type: 'info',
    message: '',
    visible: false,
  });
  currentAlert$ = this.alertSubject.asObservable();

  showAlert(
    type: AlertType,
    message: string,
    options: { duration: number }
  ): void {
    this.alertSubject.next({ type, message, visible: true });

    setTimeout(() => {
      this.alertSubject.next({ type, message, visible: false });
    }, options.duration);
  }
  hideAlert(): void {
    this.alertSubject.next({ ...this.alertSubject.value, visible: false });
  }
}
