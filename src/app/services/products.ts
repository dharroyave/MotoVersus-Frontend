import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Products } from '../interfaces/productservice';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  // inyeccion de dependencias
  private _httpClient = inject(HttpClient);

  // definir la ruta de acceso a la api
  private apiUrl = environment.appUrl;

  // metodos para hacer las peticiones a la api


  //peticion post
postProduct(productToCreate : Products) {
  return this._httpClient.post(this.apiUrl + '/products/crear', productToCreate);
};

  //peticion get
getProduct() {
  return this._httpClient.get(this.apiUrl + '/products/mostrar');
};


  // peticion put 
putProduct(productToUpdate: Products, id:string) {
  return this._httpClient.put(`${this.apiUrl}/products/actualizar/${id}`, productToUpdate);
};



  // peticion delete
deleteProduct(id:string) {
  return this._httpClient.delete(this.apiUrl + '/products/eliminar/' + id);
};
  
}
