import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

import { environment } from '../environments/environment';
import { SensorViewModule } from './sensors/sensor-view/sensor-view.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisteDashboardModule } from './admin/features/registe-dashboard/registe-dashboard.module';
import { LoginModule } from './LoginUser/login.module';
import { LandingModule } from './landing/landing.module';
import { Sensor3Module } from './sensors/sensor3/sensor3.module';
import { Sensor4Module } from './sensors/sensor4/sensor4.module';

import { AlertContainerComponent } from './shared/alert-container/alert-container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,  
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
    LandingModule,
    AlertContainerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
