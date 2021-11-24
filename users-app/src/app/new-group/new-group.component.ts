import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupsService } from '../shared/groups.service';
import { Group } from '../shared/group.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {
  @ViewChild('groupInput') groupInput!: ElementRef;
  
  constructor(public groupService: GroupsService) {}

  createGroup() {
    const groupName = this.groupInput.nativeElement.value;
    const group = new Group(groupName);
    this.groupService.addGroup(group);
  }

}
