import { Component, inject, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/users';
import { User } from '../../interfaces/user';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class Profil implements OnInit {
  baseUrl: string = environment.appUrl;
  @Input() usuarioId: string = '';
  user: User | null = null;

  private _userService = inject(UserService);

  showUser() {
    this._userService.getUserById(this.usuarioId).subscribe({
      next: (response: any) => {
        this.user = response.data;
        console.log(this.user);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
    this.showUser();
  }
}
