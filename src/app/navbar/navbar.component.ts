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
  logo: string = '/assets/images/Logo.png';

  constructor(private userService: UsersService, private router: Router) {
    this.userService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.getItem('loggedIn') === 'true'
        ? (this.isLoggedIn = true)
        : (this.isLoggedIn = false);
      let res = sessionStorage.getItem('img');
      if (res) {
        this.logo = res;
        //location.reload();
      }
      this.userService.isAdmin.subscribe((status) => {
        this.isAdmin = status;
      });
      sessionStorage.getItem('admin') === 'true'
        ? (this.isAdmin = true)
        : (this.isAdmin = false);
    }
  }

  logout() {
    this.isAdmin = false;
    this.isLoggedIn = false;
    this.userService.logout();
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('birthDate');
    sessionStorage.removeItem('gender');
    sessionStorage.removeItem('img');
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('admin');
    this.router.navigateByUrl('/profile');
    this.logo = '/assets/images/Logo.png';
  }
}
