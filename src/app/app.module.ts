// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

import { environment } from './environments/environment';
import { Sensor1Module } from './sensors/sensor1/sensor1.module';
import { Sensor2Module } from './sensors/sensor2/sensor2.module'; 
import { Sensor3Module } from './sensors/sensor3/sensor3.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sensor1Module,
    Sensor2Module,
    Sensor3Module,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }