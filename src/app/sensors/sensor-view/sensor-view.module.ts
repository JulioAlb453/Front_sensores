import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorViewComponent } from './sensor-view.component';
import { Sensor1Module } from '../sensor1/sensor1.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { Sensor2Module } from '../sensor2/sensor2.module';

@NgModule({
  declarations: [
    SensorViewComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterLink,
    NgApexchartsModule,
    Sensor1Module,
    Sensor2Module,
  ],
})
export class SensorViewModule {}
