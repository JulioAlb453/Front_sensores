import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartDataNoiseComponent } from './chart-data-noise/chart-data-noise.component';
import { Sensor2DisplayComponent } from './sensor2-display/sensor2-display.component';
import { SensorNoiseComponent } from './sensor-noise/sensor-noise.component';

import { MatIconModule } from '@angular/material/icon';

import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    ChartDataNoiseComponent,
    Sensor2DisplayComponent,
    SensorNoiseComponent,
  ],
  imports: [CommonModule, NgApexchartsModule, MatIconModule],
})
export class Sensor2Module {}
