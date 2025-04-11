

import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../service/api-listen-ws.service';
import { AlertService } from '../../service/alert-service.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-chart-data-temperature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-data-temperature.component.html',
  styleUrls: ['./chart-data-temperature.component.css'],
})
export class ChartDataTemperatureComponent implements OnInit, OnDestroy {
  currentValue: number = 0;
  history: number[] = [];
  maxLevel: number = 100;

  currentAlert: { type: string; message: string; visible: boolean } | null = null;
  private lastAlertLevel: number | null = null;
  private destroy$ = new Subject<void>();

  // Ajustar los valores de los umbrales según el rango de 23 a 28 grados
  thresholds = [
    { value: 28, color: '#FF4560', label: 'Alto' },  // Umbral de alerta alta a 28
    { value: 25, color: '#F39C12', label: 'Medio' }, // Umbral de alerta media a 25
    { value: 23, color: '#4398DB', label: 'Normal' }, // Rango normal entre 23 y 25
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
  
    // Generación de datos aleatorios entre 23 y 28 grados cada 5 segundos
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const simulatedTemperature = Math.floor(Math.random() * 6) + 23; // Generar valor aleatorio entre 23 y 28
        this.currentValue = simulatedTemperature;
        this.history.push(simulatedTemperature);
  
        if (this.history.length > 10) {
          this.history.shift();
        }
  
        this.checkAlerts();  // Verificar alertas
      });
  }
  

  private checkAlerts(): void {
    const currentThreshold = this.getCurrentThreshold();

    if (this.lastAlertLevel !== currentThreshold.value) {
      this.lastAlertLevel = currentThreshold.value;

      if (currentThreshold.value === 28) {  // Alerta alta cuando la temperatura es >= 28
        this.alertService.showAlert(
          'error',
          '¡Alerta alta de temperatura! El sistema está trabajando a máxima capacidad.',
          { duration: 5000 }
        );
      } else if (currentThreshold.value === 25) {  // Alerta media cuando la temperatura es >= 25
        this.alertService.showAlert(
          'warning',
          'Precaución: Temperatura en nivel medio. Monitoréela cuidadosamente.',
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
    if (value >= 28) return '#FF4560';
    if (value >= 25) return '#F39C12';
    return '#4398DB';
  }
} 