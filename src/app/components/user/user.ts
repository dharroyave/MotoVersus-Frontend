import { Component, inject, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/users';
import { User } from '../../interfaces/user';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class Profil implements OnInit {
  baseUrl: string = environment.appUrl;
  @Input() usuarioId: string = '';
  user: User | null = null;
  editMode: boolean = false;
  newPhoto: File | null = null;
  newPassword: string = '';

  private _userService = inject(UserService);

  ngOnInit(): void {
    this.showUser();
  }

  showUser() {
    this._userService.getUserById(this.usuarioId).subscribe({
      next: (response: any) => {
        this.user = response.data;
        console.log('Usuario cargado:', this.user);
      },
      error: (error: any) => {
        console.error('Error al cargar usuario:', error);
      }
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.newPhoto = event.target.files[0];
    }
  }

  async saveChanges() {
    if (!this.user) return;

    const formData = new FormData();
    formData.append('nombre', this.user.nombre);
    formData.append('apellido', this.user.apellido);
    formData.append('correo', this.user.correo);
    formData.append('numero', `${this.user.numero}`);

    if (this.newPassword.trim() !== '') {
      formData.append('contrasena', this.newPassword);
    }

    if (this.newPhoto) {
      formData.append('fotoPerfil', this.newPhoto);
      this.sendFormData(formData);
    } else if (this.user.fotoPerfil) {
      // Si no hay nueva foto, buscamos cargar la imagen actual como archivo
      try {
        const imageUrl = this.user.fotoPerfil.startsWith('http')
          ? this.user.fotoPerfil
          : `${this.baseUrl}${this.user.fotoPerfil}`;
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const fileFromBlob = new File([blob], 'fotoPerfil.jpg', { type: blob.type });
        formData.append('fotoPerfil', fileFromBlob);
      } catch (error) {
        console.error('Error al obtener la foto actual como archivo:', error);
      }
      this.sendFormData(formData);
    } else {
      this.sendFormData(formData);
    }
  }

  private sendFormData(formData: FormData) {

    this._userService.putUser(formData, this.usuarioId).subscribe({
      next: (res: any) => {
        Swal.fire('✅ Éxito', 'Datos actualizados correctamente', 'success');
        this.editMode = false;
        this.showUser();
      },
      error: (err: any) => {
        Swal.fire('❌ Error', 'No se pudo actualizar el usuario', 'error');
        console.error(err);
      }
    });
  }
}
