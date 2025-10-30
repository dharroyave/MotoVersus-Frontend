import { Component, OnInit } from '@angular/core';
import { Profil } from '../../components/user/user';
import { CommentsComponent } from '../../components/comment/comment';
import { CommentCreate } from '../../components/comment-create/comment-create';

@Component({
  selector: 'app-usuario',
  imports: [Profil, CommentsComponent, CommentCreate],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario implements OnInit {

  usuarioId: string | null = null;

  ngOnInit(): void {
    // Recuperar el ID del usuario del localStorage
    this.usuarioId = localStorage.getItem('usuarioId');
    console.log('ID del usuario:', this.usuarioId);
  }

}
