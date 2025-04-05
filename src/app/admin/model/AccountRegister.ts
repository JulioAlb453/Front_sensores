import { SensorRegister } from "./sensor-register";

export interface AccountRegister {
    sensors: SensorRegister[];
    folio?: string;
  }
  