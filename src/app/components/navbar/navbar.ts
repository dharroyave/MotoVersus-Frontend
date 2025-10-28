import { Component, OnInit , inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../services/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  baseUrl: string = environment.appUrl;
  logoPath: string = '/uploads/logo.png';
  logoUrl: string = '';

  private _loginService = inject(LoginService);

  get isvisible(): boolean {
    return this._loginService.isLoggedIn() && this._loginService.isAdmin();
  }

  ngOnInit() {
    this.logoUrl = `${this.baseUrl}${this.logoPath}`;
  }
}
