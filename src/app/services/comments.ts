import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../interfaces/comments';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private _httpClient = inject(HttpClient);
  private apiUrl = environment.appUrl;

  // metodos para hacer las peticiones a la api

  //peticion post
  postComments(commentsToCreate: Comments) {
    return this._httpClient.post(`${this.apiUrl}/comments/crear`, commentsToCreate);
  }

  //peticion get
  getComments() {
    return this._httpClient.get(`${this.apiUrl}/comments/mostrar`);
  }

  // peticion put
  putComments(commentsToUpdate: Comments, id: string) {
    return this._httpClient.put(`${this.apiUrl}/comments/actualizar/${id}`, commentsToUpdate);
  }

  // peticion delete
  deleteComments(id: string) {
    return this._httpClient.delete(`${this.apiUrl}/comments/eliminar/${id}`);
  }
}
