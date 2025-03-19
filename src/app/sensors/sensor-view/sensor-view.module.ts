import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sensor1DisplayComponent } from '../sensor1/sensor1-display/sensor1-display.component';
import { Sensor2DisplayComponent } from '../sensor2/sensor2-display/sensor2-display.component';
import { Sensor3DisplayComponent } from '../sensor3/sensor3-display/sensor3-display.component';
import { SensorViewComponent } from './sensor-view.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    SensorViewComponent,
    Sensor1DisplayComponent,
    Sensor2DisplayComponent,
    Sensor3DisplayComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
})
export class SensorViewModule {}
