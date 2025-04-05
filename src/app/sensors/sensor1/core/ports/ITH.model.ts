import { Observable } from "rxjs";


export interface ISensor<T> {
    getHistorialData(params? : any): Observable<T[]>
    getLastestReadings(): Observable<T[]>
    connectRealTime(): Observable<T>
}