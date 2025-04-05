import { Observable } from "rxjs";
import { SensorRepository } from "../../../../admin/infraestructure/repository/sensor-repository";
import { TemperatureHumiditySensor } from "./temperature-humidity.model";

export interface TemperatureRespositori extends SensorRepository{
    getCriticalAlerts(): Observable<TemperatureHumiditySensor[]>
}