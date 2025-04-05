// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegura acceso a directivas como *ngFor
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

import { environment } from '../environments/evironments';
import { SensorViewModule } from './sensors/sensor-view/sensor-view.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisteDashboardModule } from './admin/features/registe-dashboard/registe-dashboard.module';
import { LoginModule } from './LoginUser/login.module';
import { LandingModule } from './landing/landing.module';
import { Sensor3Module } from './sensors/sensor3/sensor3.module';
import { Sensor4Module } from './sensors/sensor4/sensor4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Importa CommonModule para usar *ngFor y otras directivas
    HttpClientModule,
    AppRoutingModule,
    SensorViewModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    NavbarComponent,
    RegisteDashboardModule,
    LoginModule,
    Sensor4Module,
    Sensor3Module,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
