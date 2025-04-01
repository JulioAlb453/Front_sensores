import { Component } from '@angular/core';

import { WebsocketService } from '../../service/websocket.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../service/api-listen-ws.service';

@Component({
  selector: 'app-sensor-ligh-chart-data',
  standalone: false,
  templateUrl: './sensor-ligh-chart-data.component.html',
  styleUrl: './sensor-ligh-chart-data.component.css'
})
export class SensorLighChartDataComponent {
currentValue : number = 0;
  history : number[] = [];
  maxLevel = 100;
  private destroy$ = new Subject<void>();

  thresholds = [
    {value: 75, color: '#FF4560', label: 'Alto'},
    {value: 50, color: '#F39C12', label: 'Medio'},
    {value: 0, color: '#4398DB', label: 'Normal'},
  ]

  constructor(
    private apiService: ApiService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.apiService.getCombinedData().pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data) => {
        this.currentValue = data.current;
        this.history = data.history;
      }
    });
  }

  ngOnDestroy(): void {
      
  }

  getCurrentColor(): string {
    const threshold = this.thresholds.find((t) => this.currentValue >= t.value);
    return threshold? threshold.color : '#4398db';
  }
  getPercentage(value: number): number {
    return Math.min((value / this.maxLevel) * 100, 100);
  }
  getCurrentThreshold(): { value: number; color: string; label: string } {
    return this.thresholds.find((t) => this.currentValue >= t.value) || this.thresholds[2];
  }
  generateRandomValue(): void {
    this.currentValue = Math.floor(Math.random() * 101);
  }
  
  getColorForValue(value: number): string {
    if (value >= 75) return '#FF4560';  
    if (value >= 50) return '#F39C12';  
    return '#4398db';                   
  }
}
