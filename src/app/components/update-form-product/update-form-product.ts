import { Component, inject, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {Product} from '../../interfaces/product';
import { ProductService } from '../../services/products';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-form-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-form-product.html',
  styleUrl: './update-form-product.css'
})
export class UpdateFormProduct implements OnInit {
  @Input() productId: string | null = null;

  private _productService = inject(ProductService);
  private _router = inject(Router);

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    cilind: new FormControl<number | null>(null),
    motors: new FormControl('', Validators.required),
    potence: new FormControl('', Validators.required),
    transmition: new FormControl('', Validators.required),
    size: new FormControl<number | null>(null),
    price: new FormControl<number | null>(null),
    photo: new FormControl(''),
    category: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    if (this.productId) {
      this._productService.getProductById(this.productId).subscribe({
        next: (res: any) => {
          const product = res.data;
          this.registerForm.patchValue({
            name: product.nombre,
            description: product.descripcion,
            cilind: product.cilindraje,
            motors: product.motor,
            potence: product.potencia,
            transmition: product.transmision,
            size: product.peso,
            price: product.precio,
            photo: product.imagenUrl,
            category: product.categoria
          });
        },
        error: (err) => console.error('Error al cargar usuario:', err)
      });
    }
  }

  handleSubmit() {
    if (!this.productId) return;

    const productData: Product = {
      _id: this.productId,
      nombre: this.registerForm.value.name || '',
      descripcion: this.registerForm.value.description || '',
      cilindraje: this.registerForm.value.cilind || 0,
      motor: this.registerForm.value.motors || '',
      potencia: this.registerForm.value.potence || '',
      transmision: this.registerForm.value.transmition || '',
      peso: this.registerForm.value.size || 0,
      precio: this.registerForm.value.price || 0,
      imagenUrl: this.registerForm.value.photo || '',
      categoria: this.registerForm.value.category || ''
    };

    this._productService.putProduct(productData, this.productId).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: 'Actualizado correctamente',
          text: res.mensaje,
          icon: 'success'
        }).then(() => {
  location.reload(); 
});
      },
      error: (err: any) => {
        Swal.fire({
          title: 'Error',
          text: err.error.mensaje || 'No se pudo actualizar el usuario',
          icon: 'error'
        });
      }
    });
  }
}