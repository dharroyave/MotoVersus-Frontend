//Nos permite interceptar el token al iniciar sesion se lo pasa a cada peticion que lo necesita 

import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login';
import { inject } from '@angular/core';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const _loginService = inject(LoginService);
  const token = _loginService.getToken();

  const request = token ? req.clone({setHeaders: { Authorization: `Bearer + token}` }}) : req;

  return next(req);
};

