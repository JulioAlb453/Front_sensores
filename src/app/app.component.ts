import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sensor-monitor';

  constructor (private router: Router){}
  get noShowNav(): boolean {
    return this.router.url !== '/home'
  }
}
