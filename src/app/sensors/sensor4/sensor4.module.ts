import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorAirPurityLevelChartDataComponent } from './sensor-air-purity-level-chart-data/sensor-air-purity-level-chart-data.component';
import { SensorAirPurityComponent } from './sensor-air-purity/sensor-air-purity.component';



@NgModule({
  declarations: [
    SensorAirPurityComponent
  ],
  imports: [
    CommonModule, SensorAirPurityLevelChartDataComponent
  ]
})
export class Sensor4Module { }
