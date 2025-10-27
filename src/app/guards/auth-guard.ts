import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _loginService = inject(LoginService);
  const _router = inject(Router);


  //1. VALIDACION 1 ya inicio sesion
  if(!_loginService.isLoggedIn()){
    _router.navigate(['/login']);
    return false;
  }
  
  if(!_loginService.isAdmin()){
    alert('No tienes permisos para acceder a esta ruta');
    _router.navigate(['/']);
    return false;
  }
  
  return true;
  
};
