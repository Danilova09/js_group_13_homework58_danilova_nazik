import { User } from './user.model';
import { EventEmitter } from '@angular/core';

export class UsersService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [
    new User('Vi', 'vi@gmail.com', true, 'Admin'),
    new User('Jinx', 'powpow@gmail.com', true, 'Admin'),
    new User('Caitlyn', 'cupcake@gmail.com', true, 'Admin'),
    new User('Silco', 'drug_dealer@gmail.com', true, 'Admin'),
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChange.emit(this.users);
  }
}



