import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing-service.service';

@Component({
  selector: 'app-view-landing',
  standalone: false,
  templateUrl: './view-landing.component.html',
  styleUrl: './view-landing.component.css',
})
export class ViewLandingComponent implements OnInit {
  features = [
    {
      title: 'Sensorización in',
      description: 'Monitoreo en tiempo real de la temperatura.',
      image: '',
    },
  ];
  abountInfo: string = '';

  constructor(private landingService: LandingService) {
    this.features = this.features.map((feature) => ({
      ...feature,
      image: `assets/${feature.title.toLowerCase().split(' ').join('-')}.png`,
    }));
  }
  ngOnInit(): void {
    this.loadFeatures();
    this.loadAbountInfo();
  }

  loadFeatures(): void {
    this.landingService.getFeatures().subscribe((features) => {
      this.features = features;
    });
  }

  loadAbountInfo(): void {
    this.landingService.getAbountInfo().subscribe((info) => {
      this.abountInfo = info;
    });
  }
}
