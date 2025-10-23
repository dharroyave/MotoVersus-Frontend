import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, ɵInternalFormsSharedModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    numero: new FormControl<number | null>(null),
    fotoPerfil: new FormControl(''),
    contrasena: new FormControl('')
  });

}
