import { Injectable } from '@angular/core';
import { SensorRegister } from "../../model/sensor-register";
import { SensorRepository } from "../repository/sensor-repository";
import { AccountRegister } from '../../model/AccountRegister';

@Injectable({
  providedIn: 'root'
})
export class SensorRegisterService {
  private account: AccountRegister = { sensors: [] };

  constructor(private sensorRepository: SensorRepository) {}

  registerSensor(sensor: SensorRegister): void {
    this.account.sensors.push(sensor);
    this.sensorRepository.saveSensors(sensor);
  }

  getSensors(): SensorRegister[] {
    return this.sensorRepository.getSavedSensors();
  }

  finalizeRegistration(): string | null {
    const sensors = this.sensorRepository.getSavedSensors();

    if (sensors.length === 0) {
      console.warn('No hay sensores registrados para finalizar el registro.');
      return null; 
    }

    const folio = 'FOLIO-' + Date.now();


    localStorage.setItem('folio', folio);
    console.log('Folio guardado en localStorage:', folio);


    this.sensorRepository.clearSensors(); 

    return folio;
  }

  getFolioFromLocalStorage(): string | null {
    return localStorage.getItem('folio');
  }

  clearFolioFromLocalStorage(): void {
    localStorage.removeItem('folio');
    console.log('Folio eliminado del localStorage');
  }

}
