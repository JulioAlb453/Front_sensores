import { Injectable, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retryWhen, delay, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private reconnectInterval = 10000;

  getSensorMessages(wsUrl: string): Observable<any> {
    const socket$: WebSocketSubject<any> = webSocket({
      url: wsUrl,
      closeObserver: {
        next: () => {
          console.log(`WebSocket cerrado para ${wsUrl}. Reconectando...`);
        }
      },
      openObserver: {
        next: () => console.log(`WebSocket conectado para ${wsUrl} ✅`)
      }
    });

    return socket$.pipe(
      retryWhen(errors => errors.pipe(
        delay(this.reconnectInterval)
      )),
      catchError(error => {
        console.error(`Error en WebSocket para ${wsUrl}:`, error);
        return throwError(() => new Error('Fallo en WebSocket'));
      }),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
