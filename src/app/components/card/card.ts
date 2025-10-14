import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/products';
import { Products } from '../../interfaces/productservice';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})


export class Card implements OnInit {

  //1 inyeccion de dependencias y declaracion de variable 
_productService = inject(ProductService);

//2 crear una variable para almacenar los productos
allproducts : Products[] = [] //vamos almacenar los productos

showProducts(){
 this._productService.getProduct().subscribe({
  //3 capturar el error
  next: (response: any) => {
    this.allproducts = response; 
    console.log(this.allproducts);
  },
  error: (error: any) => {
    console.error(error);
  }

 }
 )
}

ngOnInit(): void {
  this.showProducts();
}

}
