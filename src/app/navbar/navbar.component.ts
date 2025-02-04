import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  h: string = 'Home';
  n: string = 'Catalog';
  c: string = 'Cart';
  a: string = 'About us';
  l: string = 'Login';
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  logo: any = '/assets/images/Logo.png';

  constructor(private router: Router) {
    this.router.events.subscribe((data: any) => {
      if (data.url) {
        if (sessionStorage.getItem('mail')) {
          this.isLoggedIn = true;
          this.logo = sessionStorage.getItem('img');
          if (sessionStorage.getItem('admin') === 'true') {
            this.isAdmin = true;
          }
        }
      }
    });
  }

  logout() {
    this.isAdmin = false;
    this.isLoggedIn = false;
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('birthDate');
    sessionStorage.removeItem('gender');
    sessionStorage.removeItem('img');
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('admin');
    this.logo = '/assets/images/Logo.png';
    this.router.navigateByUrl('home');
  }
}
