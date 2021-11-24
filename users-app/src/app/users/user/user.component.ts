import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GroupsService } from '../../shared/groups.service';
import { User } from '../../shared/user.model';
import { Group } from '../../shared/group.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  groupItem!: Group;
  @Input() user!: User;
  @Output() chooseUser = new EventEmitter<User>();
  active = 'да';

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groupItem = this.groupsService.getGroupItem();
    this.groupsService.groupItemChange.subscribe((groupItem: Group) => {
      this.groupItem = groupItem;
    })
  }
  
  getActive() {
    if (this.user.active === true) {
      this.active = 'yes'
    } else {
      this.active = 'no';
    }
    return this.active;
  }

  chooseUserItem(event: Event) {
    this.chooseUser.emit();
    this.groupsService.addUser(this.groupItem, this.user.name);
  }


}
