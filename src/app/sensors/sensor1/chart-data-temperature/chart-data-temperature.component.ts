import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule localmente
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../service/api-listen-ws.service';
import { environment } from '../../../../environments/evironments';
@Component({
  selector: 'app-chart-data-temperature',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule], // Agrega CommonModule para que *ngFor y *ngIf estén disponibles
  templateUrl: './chart-data-temperature.component.html',
  styleUrls: ['./chart-data-temperature.component.css']
})
export class ChartDataTemperatureComponent implements OnInit, OnDestroy {
  currentValue: number = 0;
  history: number[] = [];
  maxLevel: number = 100;
  private destroy$ = new Subject<void>();

  thresholds = [
    { value: 75, color: '#FF4560', label: 'Alto' },
    { value: 50, color: '#F39C12', label: 'Medio' },
    { value: 0,  color: '#4398DB', label: 'Normal' }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCombinedData(
      environment.WSM_TEMPERATURE_URL,
      environment.WS_TEMPERATURE_URL
    )
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: data => {
        this.currentValue = data.current;
        this.history = data.history;
      }
    });
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

  // Método para obtener el color según el valor (usado en el *ngFor)
  getColorForValue(value: number): string {
    if (value >= 75) return '#FF4560';
    if (value >= 50) return '#F39C12';
    return '#4398DB';
  }
}
