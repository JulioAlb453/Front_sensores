import { Injectable } from '@angular/core';
import { SensorRegister } from '../../model/sensor-register';
import { AccountRegister } from '../../model/AccountRegister';

@Injectable({ providedIn: 'root' })
export class SensorRepository {
  private sensors: SensorRegister[] = [];
  private accounts: AccountRegister[] = [];

  saveSensors(sensor: SensorRegister): void {
    this.sensors.push(sensor);
  }

  clearSensors(): void {
    this.sensors = [];
  }

  getSavedSensors(): SensorRegister[] {
    return this.sensors;
  }
  saveAccount(account: AccountRegister): void {
    this.accounts.push(account);
  }

  getAccounts(): AccountRegister[] {
    return this.accounts;
  }
}
