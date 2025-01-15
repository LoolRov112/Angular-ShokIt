import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  users: User[] = [
    new User('harel', 'harel@gmail.com', '13.04.2001', 'male', '1234'),
    new User('maayan', 'maayan@gmail.com', '5.08.1995', 'male', '1234'),
    new User('moran', 'moran@yahoo.org.il', '31.10.1999', 'female', '1234'),
  ];

  constructor() {}
  login(email: string, pass: string) {
    for (let user of this.users)
      if (user.mail == email)
        if (user.password == pass) {
          this.isLoggedIn.next(true);
          return user;
        }
    return null;
  }
  register(
    name: string,
    email: string,
    birthDate: string,
    gender: string,
    pass: string
  ) {
    for (let user of this.users) if (user.mail == email) return false;
    let user: User = new User(name, email, birthDate, gender, pass);
    this.users.push(user);
    return true;
  }
  logout() {
    this.isLoggedIn.next(false);
  }

  setImg(image: string | any) {
    for (let user of this.users) {
      if (user.name == sessionStorage.getItem('name')) this.setImg(image);
    }
  }
}
