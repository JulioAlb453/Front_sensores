// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sensor1DisplayComponent } from './sensors/sensor1/sensor1-display/sensor1-display.component';
import { Sensor2DisplayComponent } from './sensors/sensor2/sensor2-display/sensor2-display.component';
import { Sensor3DisplayComponent } from './sensors/sensor3/sensor3-display/sensor3-display.component';
const routes: Routes = [
  { path: 'sensor1', component: Sensor1DisplayComponent },
  { path: 'sensor2', component: Sensor2DisplayComponent },
  { path: 'sensor3', component: Sensor3DisplayComponent },
  { path: '', redirectTo: '/sensor1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }