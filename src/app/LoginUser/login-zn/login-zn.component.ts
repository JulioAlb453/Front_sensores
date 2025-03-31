import { Component } from '@angular/core';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-login-zn',
  standalone: false,
  templateUrl: './login-zn.component.html',
  styleUrl: './login-zn.component.css'
})
export class LoginZNComponent {
  password: string = '';
  email: string = '';

  folio: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  login() {
    if (this.authService.loginUser(this.email, this.password, this.folio)) {
      alert('Inicio de sesión exitoso.');
    } else {
      this.errorMessage = 'Correo, contraseña o folio inválidos.';
    }
  }
}
