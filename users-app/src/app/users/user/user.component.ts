import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!: User;
  active = 'да';

  getActive() {
    if (this.user.active === true) {
      this.active = 'yes'
    } else {
      this.active = 'no';
    }
    return this.active;
  }

}
