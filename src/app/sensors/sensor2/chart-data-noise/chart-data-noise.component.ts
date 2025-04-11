import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../service/api-listen-ws.service';
import { AlertService } from '../../service/alert-service.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-chart-data-noise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-data-noise.component.html',
  styleUrls: ['./chart-data-noise.component.css']
})
export class ChartDataNoiseComponent implements OnInit, OnDestroy {
  currentValue: number = 0;
  history: number[] = [];
  maxLevel: number = 100;

  currentAlert: { type: string; message: string; visible: boolean } | null = null;
  private lastAlertLevel: number | null = null;
  private destroy$ = new Subject<void>();

  thresholds = [
    { value: 50, color: '#FF4560', label: 'Ruidoso' },
    { value: 30, color: '#F39C12', label: 'Medio' },
    { value: 10,  color: '#4398DB', label: 'Normal' }
  ];

  constructor(
    private apiService: ApiService,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Suscripción a cambios de alerta
    this.alertService.currentAlert$
      .pipe(takeUntil(this.destroy$))
      .subscribe(alert => {
        this.currentAlert = alert;
        this.cdr.detectChanges();
      });
  
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const simulatedNoiseLevel = Math.floor(Math.random() * 19) + 25;
        this.currentValue = simulatedNoiseLevel;
        this.history.push(simulatedNoiseLevel);
  
        if (this.history.length > 10) {
          this.history.shift(); 
        }
  
        this.checkAlerts();
      });
  }
  

  private checkAlerts(): void {
    const currentThreshold = this.getCurrentThreshold();

    if (this.lastAlertLevel !== currentThreshold.value) {
      this.lastAlertLevel = currentThreshold.value;

      if (currentThreshold.value === 75) {
        this.alertService.showAlert(
          'error',
          '¡Nivel de ruido muy alto! Toma medidas inmediatas.',
          { duration: 5000 }
        );
      } else if (currentThreshold.value === 50) {
        this.alertService.showAlert(
          'warning',
          'Advertencia: Nivel de ruido medio. Mantente alerta.',
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

  getCurrentThreshold(): { value: number, color: string, label: string } {
    return this.thresholds.find(t => this.currentValue >= t.value) || this.thresholds[2];
  }

  getColorForValue(value: number): string {
    if (value >= 50) return '#FF4560';
    if (value >= 30) return '#F39C12';
    return '#4398DB';
  }
} 