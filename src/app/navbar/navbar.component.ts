import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { User } from '../models/user';
import { fork } from 'child_process';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  h: string = 'Home';
  n: string = 'Catalog';
  c: string = 'Cart';
  a: string = 'About us';
  l: string = 'Login';
  isLoggedIn: boolean = false;
  logo: string = '';
  constructor(private userService: UsersService, private router: Router) {
    this.userService.isLoggedIn.subscribe(
      (status) => (this.isLoggedIn = status)
    );
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = this.userService.isLoggedIn.getValue();
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('birthDate');
    sessionStorage.removeItem('gender');
    sessionStorage.removeItem('img');
    sessionStorage.setItem('loggedIn', 'false');
    console.log(this.isLoggedIn);
    this.router.navigateByUrl('/profile');
  }
}
