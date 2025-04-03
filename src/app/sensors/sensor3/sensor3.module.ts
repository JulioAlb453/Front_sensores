import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sensor3DisplayComponent } from './sensor3-display/sensor3-display.component';
import { SensorLighChartDataComponent } from './sensor-ligh-chart-data/sensor-ligh-chart-data.component';
import { SensorLighComponent } from './sensor-ligh/sensor-ligh.component';
@NgModule({
  declarations: [
    Sensor3DisplayComponent,
    
    SensorLighComponent,
  ],
  imports: [CommonModule, SensorLighChartDataComponent,],
})
export class Sensor3Module {}
