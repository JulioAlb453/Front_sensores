import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorViewComponent } from './sensors/sensor-view/sensor-view.component';
import { SensorTemperatureComponent } from './sensors/sensor1/sensor-temperature/sensor-temperature.component';
import { SensorNoiseComponent } from './sensors/sensor2/sensor-noise/sensor-noise.component';
import { SensorLighComponent } from './sensors/sensor3/sensor-ligh/sensor-ligh.component';
import { RegisteDashboardComponent } from './admin/features/registe-dashboard/registe-dashboard.component';
import { RegisterZNComponent } from './LoginUser/register-zn/register-zn.component';
import { LoginZNComponent } from './LoginUser/login-zn/login-zn.component';
import { ViewLandingComponent } from './landing/view-landing/view-landing.component';
import { SensorAirPurityComponent } from './sensors/sensor4/sensor-air-purity/sensor-air-purity.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: ViewLandingComponent },
  { path: "login", component: LoginZNComponent },
  { path: "register", component: RegisterZNComponent },
  { path: "sensorView", component: SensorViewComponent,  },
  { path: "dashboard", component: RegisteDashboardComponent, canActivate: [AdminGuard] },
  { path: "sensorTemperature", component: SensorTemperatureComponent,  },
  { path: "sensorNoise", component: SensorNoiseComponent,  },
  { path: "sensorLight", component: SensorLighComponent,  },
  { path: "sensorAirPurity", component: SensorAirPurityComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}