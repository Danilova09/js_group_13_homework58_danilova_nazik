import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.usersService.usersChange.subscribe((users: User[]) => {
      this.users = users;
    })
  }
}
