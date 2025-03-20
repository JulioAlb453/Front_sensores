import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sensor2DisplayComponent } from '../sensor2/sensor2-display/sensor2-display.component';
import { Sensor3DisplayComponent } from '../sensor3/sensor3-display/sensor3-display.component';
import { SensorViewComponent } from './sensor-view.component';
import { Sensor1Module } from '../sensor1/sensor1.module';
import { SensorNoiseComponent } from '../sensor2/sensor-noise/sensor-noise.component';
import { SensorLighComponent } from '../sensor3/sensor-ligh/sensor-ligh.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    SensorViewComponent,
    Sensor2DisplayComponent,
    Sensor3DisplayComponent,
    SensorNoiseComponent,
    SensorLighComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterLink,
    NgApexchartsModule,
    Sensor1Module,
  ],
})
export class SensorViewModule {}
