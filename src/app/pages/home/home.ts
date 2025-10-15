import { Component } from '@angular/core';
//1. importar la clase del componente y agregar a los componentes
import { Card } from '../../components/card/card';
import { Carrusel } from '../../components/carrusel/carrusel';

@Component({
  selector: 'app-home',
  imports: [Card, Carrusel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  //Logica de funcionamiento de nuestro componente
}
