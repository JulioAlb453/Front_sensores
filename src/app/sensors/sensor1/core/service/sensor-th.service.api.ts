// src/app/features/sensor-th/infrastructure/sensor-th-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/evironments';
import { TemperatureHumiditySensor } from '../domain/temperature-humidity.model';
@Injectable({
  providedIn: 'root'
})
export class SensorThApiService {
  private readonly baseUrl = environment.API_URl_Consumer;

  constructor(private http: HttpClient) {}

  getSensorData(): Observable<TemperatureHumiditySensorModel> {
    return this.http.get<TemperatureHumiditySensorModel>(`${this.baseUrl}/temperaturehumidity/data`);
  }
}