// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

import { environment } from '../environments/environment';
import { SensorViewModule } from './sensors/sensor-view/sensor-view.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { RegisteDashboardModule } from './admin/features/registe-dashboard/registe-dashboard.module';
import { LoginModule } from './LoginUser/login.module';
import { LandingModule } from './landing/landing.module';
import { Sensor3Module } from './sensors/sensor3/sensor3.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SensorViewModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    CommonModule,
    HttpClientModule,
    NavbarComponent,
    RegisteDashboardModule,
    LoginModule,
    Sensor3Module,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }