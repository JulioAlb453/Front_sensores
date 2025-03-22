import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDataTemperatureComponent } from './chart-data-temperature/chart-data-temperature.component';
import { Sensor1DisplayComponent } from './sensor1-display/sensor1-display.component';
import { SensorTemperatureComponent } from './sensor-temperature/sensor-temperature.component';

import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    Sensor1DisplayComponent,
    SensorTemperatureComponent,
    ChartDataTemperatureComponent,
  ],
  imports: [CommonModule, NgApexchartsModule],
})
export class Sensor1Module {}
