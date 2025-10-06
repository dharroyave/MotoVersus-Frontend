import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para poder usar GET, POST, PUT, DELETE
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _httpClient = Inject(HttpClient);
  private apiUrl = environment.appUrl; // url general del backend


  //metodos para hacer peticiones -> Determina sus contrladores

  //petición POST
  postUser(userToCreate: User) {
  return this._httpClient.post(this.apiUrl + '/users/crear', userToCreate);
  }

  //petición GET
  getUser() {
    return this._httpClient.get(this.apiUrl + '/users/mostrar');
  }

  //petición PUT
  putUser(userToUpdate: User, id: string) {
    return this._httpClient.put(this.apiUrl + `/users/actualizar/:${id}`, userToUpdate);
  }

  //petición DELETE
  deletUser(id: string) {
    return this._httpClient.delete(this.apiUrl + '/users/eliminar/:',{
      params: { id }
    });
  }

}
