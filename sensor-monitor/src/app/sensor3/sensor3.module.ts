import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sensor3RoutingModule } from './sensor3-routing.module';
import { Sensor3DisplayComponent } from './sensor3-display/sensor3-display.component';


@NgModule({
  declarations: [
    Sensor3DisplayComponent
  ],
  imports: [
    CommonModule,
    Sensor3RoutingModule
  ]
})
export class Sensor3Module { }
