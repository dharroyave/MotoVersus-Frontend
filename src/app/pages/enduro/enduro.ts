import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { Carrusel } from '../../components/carrusel/carrusel';

@Component({
  selector: 'app-enduro',
  imports: [Card, Carrusel],
  templateUrl: './enduro.html',
  styleUrl: './enduro.css'
})
export class Enduro {

}
