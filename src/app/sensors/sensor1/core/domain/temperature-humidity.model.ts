// src/app/features/sensor-th/domain/sensor-th.model.ts
export interface TemperatureHumiditySensorModel {
    id: number;
    sensor_id: string;
    temperatura: number;
    humedad: number;
    timestamp: string;
  }
  
