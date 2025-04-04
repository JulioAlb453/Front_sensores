import { Observable } from "rxjs";
import { SensorRepository } from "../../../../admin/infraestructure/repository/sensor-repository";
import { TemperatureHumiditySensorModel } from "./temperature-humidity.model";
export interface TemperatureRespositori extends SensorRepository{
    getCriticalAlerts(): Observable<TemperatureHumiditySensorModel[]>
}