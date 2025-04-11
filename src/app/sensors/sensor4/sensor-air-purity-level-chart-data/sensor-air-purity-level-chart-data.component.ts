import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WebsocketService } from '../../service/websocket.service';
import { AlertService } from '../../service/alert-service.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-sensor-air-purity-level-chart-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sensor-air-purity-level-chart-data.component.html',
  styleUrls: ['./sensor-air-purity-level-chart-data.component.css'],
})
export class SensorAirPurityLevelChartDataComponent implements OnInit, OnDestroy {
  currentValue: number = 0;
  history: number[] = [];
  maxLevel: number = 100;
  isLoading: boolean = true;

  currentAlert: { type: string; message: string; visible: boolean } | null = null;
  private lastAlertLevel: number | null = null;
  private destroy$ = new Subject<void>();

  thresholds = [
    { value: 1200, color: '#FF4560', label: 'Alto' },
    { value: 800, color: '#F39C12', label: 'Medio' },
    { value: 350, color: '#4398DB', label: 'Normal' }
  ];

  constructor(
    private alertService: AlertService,
    private websocketService: WebsocketService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const wsUrl = environment.WS_AIR_URL;

    this.websocketService.getSensorMessages(wsUrl)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.currentValue = data?.CO2PPM ?? 0;
        this.history.push(this.currentValue);

        if (this.history.length > 10) {
          this.history.shift();
        }

        this.checkAlerts(); 
        this.cdr.detectChanges(); 
      });
    
    this.alertService.currentAlert$
      .pipe(takeUntil(this.destroy$))
      .subscribe(alert => {
        this.currentAlert = alert;
        this.cdr.detectChanges();
      });
  }

  private checkAlerts(): void {
    const currentThreshold = this.getCurrentThreshold();

    if (this.lastAlertLevel !== currentThreshold.value) {
      this.lastAlertLevel = currentThreshold.value;

      if (currentThreshold.value === 1200) {
        this.alertService.showAlert(
          'error',
          '¡Alerta! Nivel de CO2 muy alto, posible riesgo para la salud.',
          { duration: 5000 }
        );
      } else if (currentThreshold.value === 800) {
        this.alertService.showAlert(
          'warning',
          'Precaución: Nivel de CO2 medio.',
          { duration: 5000 }
        );
      }
    }
  }

  onClose(): void {
    this.alertService.hideAlert();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCurrentColor(): string {
    const threshold = this.thresholds.find(t => this.currentValue >= t.value);
    return threshold ? threshold.color : '#4398DB';
  }

  getPercentage(value: number): number {
    return Math.min((value / this.maxLevel) * 100, 100);
  }

  getCurrentThreshold(): { value: number; color: string; label: string } {
    return this.thresholds.find(t => this.currentValue >= t.value) || this.thresholds[2];
  }
  getColorForValue(value: number): string {
    if (value >= 800) return '#FF4560';
    if (value >= 1200) return '#F39C12';
    return '#4398DB';
  }
}
