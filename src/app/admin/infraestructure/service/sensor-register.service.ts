import { Injectable } from '@angular/core';
import { SensorRegister } from "../../model/sensor-register";
import { SensorRepository } from "../repository/sensor-repository";
import { AccountRegister } from '../../model/AccountRegister';
import { v4 as uuidv4 } from 'uuid';

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

  finalizeRegistration(): string {
    if (this.sensorRepository.getSavedSensors().length === 0) {
        throw new Error('No hay sensores registrados para finalizar el registro.');
    }

    const folio = 'FOLIO-' + Date.now();
    this.sensorRepository.clearSensors(); 
    return folio;
}

}
