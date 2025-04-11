import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
export type AlertType = 'success' | 'error' | 'warning' | 'info';


@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {
  @Input() type: AlertType = 'info';
  @Input() message: string = '';
  @Input() dismissible: boolean = true;
  @Input() autoClose: boolean = false;
  @Input() duration: number = 5000;
  @Input() visible: boolean = false;
  
  @Output() closed = new EventEmitter<void>();
  
  private timer: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && this.visible && this.autoClose) {
      this.setAutoClose();
    }
  }

  dismiss(): void {
    this.visible = false;
    this.closed.emit();
    this.clearTimer();
  }

  private setAutoClose(): void {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.dismiss();
    }, this.duration);
  }

  private clearTimer(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}