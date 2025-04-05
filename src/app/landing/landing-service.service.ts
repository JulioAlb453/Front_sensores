import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  getFeatures(): Observable<any[]> {
    const features = [
      {
        title: 'Sensorización inteligente',
        description:
          'Implementamos tecnologías de sensorización para mejorar la calidad de vida de los usuarios.',
      },
      {
        title: 'Sensibilización a la emergencia',
        description:
          'Nos adaptamos a las necesidades específicas de cada usuario para proporcionar una experiencia segura y eficiente.',
      },
      {
        title: 'Monitorización remota',
        description:
          'Nos conectamos a sistemas remotos para monitorear el estado de los sensores en tiempo real.',
      },
    ];
    return of(features);
  }

  getAbountInfo(): Observable<string> {
    const abountText = `Este sistema de monitoreo ambiental está diseñado 
      para ayudarte a mantener tus instalaciones seguras y 
      saludables, asegurando el control de variables ambientales críticas.`;
    return of(abountText);
  }
}
