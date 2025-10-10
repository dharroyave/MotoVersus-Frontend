import { Routes } from '@angular/router';
//1. Importar todos nuestros componentes pagina
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Admin } from './pages/admin/admin';
import { Deportivas } from './pages/deportivas/deportivas';
import { Enduro } from './pages/enduro/enduro';
import { Hibrida } from './pages/hibrida/hibrida';
import { NotFound } from './pages/not-found/not-found';
import { Register } from './pages/register/register';
import { Usuario } from './pages/usuario/usuario';
import { Details } from './pages/details/details';

export const routes: Routes = [
    {path: '', component: Home, title: 'Motoversus' },
    {path: 'about', component: About, title: 'About' },
    {path: 'admin', component: Admin, title: 'Admin' },
    {path: 'deportivas', component: Deportivas, title: 'Deportivas' },
    {path: 'enduro', component: Enduro, title: 'Enduro' },
    {path: 'hibrida', component: Hibrida, title: 'Hibrida' },
    {path: 'details/:id', component: Details, title: 'Product Details'},
    {path: 'register', component: Register, title: 'Register' },
    {path: 'usuario', component: Usuario, title: 'Usuario' },
    {path: '**', component: NotFound, title: '404' }
];
