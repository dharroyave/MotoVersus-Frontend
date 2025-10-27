import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  // 1. la inyección de dependencias y declaración de variables
  _productService = inject(ProductService);
  // variable
  allProducts : Product[] = []; //vamos a almacenar todos los productos de la base de datos
  baseUrl : string = environment.appUrl;

  showProducts(){
    //1. voy a hacer la peticion get
    //2. voy a guardar los productos en mi variable all products
    //3. voy a mostrarlos en mi navegador
    this._productService.getProduct().subscribe({
      // manejo de errores -> gestion de respuestas del back
      next:(response : any)=>{
        this.allProducts = response.data;
        console.log(this.allProducts);
      }, //respuestas positivas del back
      error: (error : any)=>{
        console.error(error);
      } //respuestas de error del back
    })
  }


  ngOnInit(): void {
      // ejecute una accion al cargarse por primera vez en el navegador
      this.showProducts();
  }


}