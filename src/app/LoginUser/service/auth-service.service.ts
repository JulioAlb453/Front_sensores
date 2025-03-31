import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validFolios: string[] = ['FOLIO-123456', 'FOLIO-789012']; 

  validateFolio(folio: string): boolean {
    return this.validFolios.includes(folio);
  }

  registerUser(folio: string, name: string, email: string, password: string): boolean {
    const storedFolio = localStorage.getItem('folio'); 
    if (storedFolio && storedFolio === folio) {
      console.log('Usuario registrado:', { name, email, password, folio });
      localStorage.removeItem('folio'); 
      return true;
    }

    return false; // Si el folio no es válido
  }

  loginUser(folio: string, password: string): boolean {
    return this.validateFolio(folio);
  }
}
