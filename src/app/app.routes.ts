import { Routes } from '@angular/router';
//1. Importar todos nuestros componentes pagina

import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Products } from './pages/products/products';
import { Details } from './pages/details/details';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
 {path: '', component: Home, title: 'Home'},
 {path: 'admin', component: Admin, title: 'Dashboard'},
 {path: 'login', component: Login, title: 'Login'},
 {path: 'register', component: Register, title: 'Register'},
 {path: 'products', component: Products, title: 'Products'},
 {path: 'details/:id', component: Details, title: 'Product Details'},
 {path: '**', component: NotFound, title: '404'}
];
