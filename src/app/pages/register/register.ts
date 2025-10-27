import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import Swal from 'sweetalert2';
import { UserService } from '../../services/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private _userService = inject(UserService);
  private _router = inject(Router);

  registerForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    numero: new FormControl<string>('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    fotoPerfil: new FormControl('', [Validators.required]),
    contrasena: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
  });
  handleSubmit() {

    const userData: User = {
      nombre: this.registerForm.value.nombre || '',         
      apellido: this.registerForm.value.apellido || '',    
      user: this.registerForm.value.user || '',    
      correo: this.registerForm.value.correo || '',         
      numero: Number(this.registerForm.value.numero) || 0,       
      fotoPerfil: this.registerForm.value.fotoPerfil || '',      
      contrasena: this.registerForm.value.contrasena || '',   
      role: 'user'
    };

    console.log("Datos del usuario a registrar:", userData);

    this._userService.postUser(userData).subscribe({
      next: (res: any) => {
        console.log("✅ Respuesta del servidor:", res);
        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: res.mensaje
        });
        this.registerForm.reset(); // opcional, limpia el formulario
      },
      error: (err: any) => {
        console.error("Error en el registro:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error?.mensaje || "Ocurrió un error al registrar el usuario"
        });
      }
    });
  }
}
