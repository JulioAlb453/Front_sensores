import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorAirPurityLevelChartDataComponent } from './sensor-air-purity-level-chart-data/sensor-air-purity-level-chart-data.component';
import { SensorAirPurityComponent } from './sensor-air-purity/sensor-air-purity.component';



@NgModule({
  declarations: [
    SensorAirPurityLevelChartDataComponent,
    SensorAirPurityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Sensor4Module { }
