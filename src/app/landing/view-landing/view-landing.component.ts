import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing-service.service';

@Component({
  selector: 'app-view-landing',
  standalone: false,
  templateUrl: './view-landing.component.html',
  styleUrl: './view-landing.component.css',
})
export class ViewLandingComponent implements OnInit {
  imgs = [
    {
      title: 'Sensorización in',
      description: 'Monitoreo en tiempo real de la temperatura.',
      image: '',
    },
  ];
  abountInfo: string = '';

  constructor(private landingService: LandingService) {
    this.imgs = this.imgs.map((imgs) => ({
      ...imgs,
      image: `assets/${imgs.title.toLowerCase().split(' ').join('-')}.png`,
    }));
  }
  ngOnInit(): void {
    this.loadFeatures();
    this.loadAbountInfo();
  }

  loadFeatures(): void {
    this.landingService.getFeatures().subscribe((imgs) => {
      this.imgs = imgs;
    });
  }

  loadAbountInfo(): void {
    this.landingService.getAbountInfo().subscribe((info) => {
      this.abountInfo = info;
    });
  }
}
