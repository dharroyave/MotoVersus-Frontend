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
  _productService = inject(ProductService);
  allproducts: Product[] = [];
  baseUrl: string = environment.appUrl;

  showProducts() {
    this._productService.getProduct().subscribe({
      next: (response: any) => {
        this.allproducts = response.data;
        console.log(this.allproducts);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  ngOnInit(): void {
    this.showProducts();
  }
}
