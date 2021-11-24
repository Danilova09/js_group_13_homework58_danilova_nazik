import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupsService } from '../shared/groups.service';
import { Group } from '../shared/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups!: Group[];
  groupItem!: Group;
  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groups = this.groupsService.getUsers();
    this.groupsService.groupChange.subscribe((groups: Group[]) => {
      this.groups = groups;
    });
    this.groupItem = this.groupsService.getGroupItem();
    this.groupsService.groupItemChange.subscribe((groupItem: Group) => {
      this.groupItem = groupItem;
    })
  }

  onChooseGroup(i: number) {
    this.groupsService.onChooseGroup(this.groups[i]);
  }

}
