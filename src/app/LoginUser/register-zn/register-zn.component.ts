import { Component } from '@angular/core';
import { AuthService } from '../service/auth-service.service';


@Component({
  selector: 'app-register-zn',
  standalone: false,
  templateUrl: './register-zn.component.html',
  styleUrl: './register-zn.component.css'
})
export class RegisterZNComponent {
  folio: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.authService.registerUser(this.folio, this.name, this.email, this.password)) {
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    } else {
      this.errorMessage = 'Folio inválido. No puedes registrarte sin un folio válido.';
    }
  }

}
