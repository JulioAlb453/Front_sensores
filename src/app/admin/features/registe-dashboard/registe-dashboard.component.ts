import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SensorRegister } from '../../model/sensor-register';
import { SensorRepository } from '../../infraestructure/repository/sensor-repository';
import { SensorRegisterService } from '../../infraestructure/service/sensor-register.service';
import { AuthService } from '../../../LoginUser/service/auth-service.service';

@Component({
  selector: 'app-registe-dashboard',
  standalone: false,
  templateUrl: './registe-dashboard.component.html',
  styleUrl: './registe-dashboard.component.css',
})
export class RegisteDashboardComponent {
  sensors: SensorRegister[] = [];
  isLoading: boolean = false;
  newSensor: SensorRegister = { macAddress: '', location: '' };
  generatedFolio: string | null = null;

  constructor(
    private sensorService: SensorRegisterService,
    private sensorRepository: SensorRepository,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSensors();
  }

  registerDevice(): void {
    if (!this.newSensor.macAddress || !this.newSensor.location) {
      return;
    }
    this.isLoading = true;
    this.sensorService.registerSensor(this.newSensor);
    setTimeout(() => {
      this.loadSensors();
      this.newSensor = { macAddress: '', location: '' };
      this.isLoading = false;
    }, 1000);
  }

  finalizeRegistration(): void {
    const folio = this.sensorService.finalizeRegistration();
    if (folio) {
      this.generatedFolio = folio;
      this.sensors = [];
      alert('Registro finalizado. Folio generado: ' + this.generatedFolio);
    } else {
      alert('No hay sensores registrados. No se puede finalizar el registro.');
    }
  }

  private loadSensors(): void {
    this.sensors = this.sensorService.getSensors();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
