import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../interfaces/credentials';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  //1. inyectar y definir variables
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  private apiUrl = environment.appUrl;

  // 2. desarrollo logica del servicio
  // 2.1. Petición POST
  login(loginCredentials : Credentials){
    return this._httpClient.post(`${this.apiUrl}/login`,loginCredentials);
  }

  // 2.2. Obtención del Token
  getToken(){
    return localStorage.getItem('token');
  }

  // 2.3. Validación Rol Admon
  isAdmin(){
    const token = this.getToken();
    if(token){
      const decode : any =jwtDecode(token);
      return decode.admin === true ? true : false
    }else{
      console.log('No Registra token')
      return false;
    }
  }
  
  // 2.4. Redirecciona al Iniciar Sesión
  redirectTo(){
    if(this.isAdmin()){
      this._router.navigate(['/admin']);
    }else{
      this._router.navigate(['/']);
    }
  }

  // 2.5. Cierre de Sesión
  logout(){
    localStorage.removeItem('token');
    alert('Sesión Cerrada con Exito, Vuelve pronto!')
    this._router.navigate(['/login']);
  }
}
