import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../service/api-listen-ws.service';
import { environment } from '../../../../environments/environment';
import { AlertService } from '../../service/alert-service.service';


interface LightData {
  current: number;
  history: number[];
}

@Component({
  selector: 'app-sensor-ligh-chart-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sensor-ligh-chart-data.component.html',
  styleUrls: ['./sensor-ligh-chart-data.component.css'],
})
export class SensorLighChartDataComponent implements OnInit, OnDestroy {
  currentValue: number = 0;
  history: number[] = [];
  maxLevel: number = 100;
  isConnected: boolean = false;
  isLoading: boolean = true;

  currentAlert: { type: string; message: string; visible: boolean } | null = null;
  private lastAlertLevel: number | null = null;
  private destroy$ = new Subject<void>();

  thresholds = [
    { value: 30, color: '#FF4560', label: 'Alto' },
    { value: 24, color: '#F39C12', label: 'Medio' },
    { value: 19, color: '#4398DB', label: 'Normal' }
  ];

  constructor(
    private apiService: ApiService,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Iniciar simulación de datos si no estamos conectados a WebSocket
    this.simulateLightData();

    // Suscripción a cambios de alerta
    this.alertService.currentAlert$
      .pipe(takeUntil(this.destroy$))
      .subscribe(alert => {
        this.currentAlert = alert;
        this.cdr.detectChanges();
      });
  }

  private simulateLightData(): void {
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const simulatedLight = Math.floor(Math.random() * 7); // Generación de valor aleatorio entre 0 y 100
        this.currentValue = simulatedLight;
        this.history.push(simulatedLight);

        if (this.history.length > 10) {
          this.history.shift(); // Limitar el historial a los últimos 10 valores
        }

        this.checkAlerts(); // Verificar alertas con cada actualización de datos
      });
  }

  private checkAlerts(): void {
    const currentThreshold = this.getCurrentThreshold();
  
    if (this.lastAlertLevel !== currentThreshold.value) {
      this.lastAlertLevel = currentThreshold.value;
  
      // Cambia 75 y 50 por los valores correctos
      if (currentThreshold.value === 30) {
        this.alertService.showAlert(
          'error',
          '¡Alerta alta de temperatura! El sistema está trabajando a máxima capacidad.',
          { duration: 5000 }
        );
      } else if (currentThreshold.value === 26) {
        this.alertService.showAlert(
          'warning',
          'Precaución: Temperatura en nivel medio. Monitoréela cuidadosamente.',
          { duration: 5000 }
        );
      }
    }
  }
  
  private attemptReconnection(): void {
    setTimeout(() => {
      if (!this.destroy$.closed) {
        console.log('Intentando reconectar...');
        this.simulateLightData(); // Reintentar simulación de datos si WebSocket se cae
      }
    }, 5000);
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
    if (value >= 30) return '#FF4560';
    if (value >= 24) return '#F39C12';
    return '#4398DB';
  }
}