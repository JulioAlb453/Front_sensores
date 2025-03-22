// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorViewComponent } from './sensors/sensor-view/sensor-view.component';
import { SensorTemperatureComponent } from './sensors/sensor1/sensor-temperature/sensor-temperature.component';
import { SensorNoiseComponent } from './sensors/sensor2/sensor-noise/sensor-noise.component';
import { SensorLighComponent } from './sensors/sensor3/sensor-ligh/sensor-ligh.component';
const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  { path: 'home', component: SensorViewComponent },
  { path: 'sensorTemperature', component: SensorTemperatureComponent },
  { path: 'sensorNoise', component: SensorNoiseComponent },
  { path: 'sensorLight', component: SensorLighComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
