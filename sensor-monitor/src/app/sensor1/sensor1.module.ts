import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sensor1RoutingModule } from './sensor1-routing.module';
import { Sensor1DisplayComponent } from './sensor1-display/sensor1-display.component';


@NgModule({
  declarations: [
    Sensor1DisplayComponent
  ],
  imports: [
    CommonModule,
    Sensor1RoutingModule
  ]
})
export class Sensor1Module { }
