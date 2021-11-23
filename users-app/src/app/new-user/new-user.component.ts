import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../shared/user.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('checkboxActiveInput') checkboxActiveInput!: ElementRef;
  @ViewChild('selectRole') selectRole!: ElementRef;

  constructor(public usersService: UsersService) {}

  createUser() {
    const name = this.nameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const active = this.checkboxActiveInput.nativeElement.checked;
    const role = this.selectRole.nativeElement.value;
    const user = new User(name, email, active, role);
    this.usersService.addUser(user);
  }

}
