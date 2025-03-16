import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sensor2RoutingModule } from './sensor2-routing.module';
import { Sensor2DisplayComponent } from './sensor2-display/sensor2-display.component';


@NgModule({
  declarations: [
    Sensor2DisplayComponent
  ],
  imports: [
    CommonModule,
    Sensor2RoutingModule
  ]
})
export class Sensor2Module { }
