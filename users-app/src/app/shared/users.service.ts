import { User } from './user.model';
import { EventEmitter } from '@angular/core';

export class UsersService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [
    new User('Daisy', 'daisy@gmail.com', true, 'Admin'),
    new User('Joshua', 'Joshua@gmail.com', true, 'Admin'),
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChange.emit(this.users);
  }
}



