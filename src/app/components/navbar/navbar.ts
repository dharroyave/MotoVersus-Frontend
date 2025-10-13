import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  baseUrl: string = environment.appUrl;
  logoPath: string = '/uploads/logo.png';
  logoUrl: string = '';

  ngOnInit() {
    this.logoUrl = `${this.baseUrl}${this.logoPath}`;
  }
}
