import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para poder usar GET, POST, PUT, DELETE
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  //1. Inyección de dependencias y/* directivas de Angular 
  private _httpClient = inject(HttpClient);

  //2. Definir la ruta de acceso al back
  private apiUrl = environment.appUrl; // url general del backend

  //3. Metodos para hacer peticiones 


  //petición POST
  postProduct(productToCreate: Product) {
    return this._httpClient.post(this.apiUrl + '/products/crear', productToCreate);
  };
  //petición GET
  getProduct() {
    return this._httpClient.get(this.apiUrl + '/products/mostrar');
  };


  //petición PUT
  putProduct(productToUpdate: Product, id: string) {
    return this._httpClient.put(this.apiUrl + `/products/actualizar/:${id}`, productToUpdate);

  };
  //petición DELETE
  deletProduct(id: string) {
    return this._httpClient.delete(this.apiUrl + '/products/eliminar/:',{
      params: { id }
    });
  };
}
