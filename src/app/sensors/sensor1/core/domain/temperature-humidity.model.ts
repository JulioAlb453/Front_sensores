// src/app/features/sensor-th/domain/sensor-th.model.ts
export interface TemperatureHumiditySensor {
    id: number;
    sensor_id: string;
    temperatura: number;
    humedad: number;
    timestamp: string;
  }
  
  export interface SensorTHData {
    current: TemperatureHumiditySensor;
    history: TemperatureHumiditySensor[];
  }