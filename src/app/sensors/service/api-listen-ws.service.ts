import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, startWith } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.WSMURL; 
  constructor(
    private http: HttpClient,
    private wsService: WebsocketService
  ) {}

  getCombinedData(): Observable<{ current: number, history: number[] }> {
    return this.http.get<{ messages: number[] }>(this.apiUrl).pipe(
      catchError(() => of({ messages: [] })), 
      mergeMap(initialData => {
        const initialHistory = initialData.messages || [];
        return this.wsService.messages$.pipe(
          startWith(initialHistory.slice(-1)[0] || 0),
          map((wsData: number) => {
            const newHistory = [
              ...initialHistory.slice(-9), 
              wsData 
            ];
            return {
              current: wsData,
              history: newHistory
            };
          })
        );
      })
    );
  }
}