import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartDataNoiseComponent } from './chart-data-noise/chart-data-noise.component';
import { SensorNoiseComponent } from './sensor-noise/sensor-noise.component';

import { MatIconModule } from '@angular/material/icon';

import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    
    SensorNoiseComponent,
  ],
  imports: [CommonModule, NgApexchartsModule, MatIconModule, ChartDataNoiseComponent,],
})
export class Sensor2Module {}
