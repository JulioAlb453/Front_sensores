import { Injectable, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, tap, retryWhen, delay, takeUntil } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnDestroy {
  private socket$!: WebSocketSubject<any>;
  private messagesSubject = new Subject<any>();
  private destroy$ = new Subject<void>();
  private reconnectInterval = 10000;

  public messages$ = this.messagesSubject.asObservable();

  constructor() {
    this.connect();
    this.handleIncomingMessage
  }

  private connect(): void {
    this.socket$ = webSocket({
      url: environment.WSURL,
      closeObserver: {
        next: () => {
          console.log('WebSocket cerrado. Reconectando...');
          this.reconnect();
        }
      },
      openObserver: {
        next: () => console.log('WebSocket conectado ✅')
      }
    });

    this.socket$.pipe(
      takeUntil(this.destroy$),
      tap(msg => {
        console.log('Mensaje recibido:', msg);
        this.messagesSubject.next(msg);
      }),
      retryWhen(errors => errors.pipe(
        delay(this.reconnectInterval),
        tap(() => console.log('Reintentando conexión...'))
      )),
      catchError(error => {
        console.error('Error en WebSocket:', error);
        return throwError(() => new Error('Fallo en WebSocket')); 
      })
    ).subscribe();
  }
  private handleIncomingMessage(msg: any): void {
    console.log('Mensaje WebSocket (raw):', msg);
    if (typeof msg === 'number') {
      this.messagesSubject.next(msg); 
    } else {
      console.warn('Mensaje no numérico:', msg);
    }
  }

  private reconnect(): void {
    setTimeout(() => this.connect(), this.reconnectInterval);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.socket$?.complete();
  }
}