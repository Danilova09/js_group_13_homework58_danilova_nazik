import { Group } from './group.model';
import { EventEmitter } from '@angular/core';

export class GroupsService {
  groupItem!: Group;
  groupChange = new EventEmitter<Group[]>();
  groupItemChange = new EventEmitter<Group>();

  groups = [
    {groupName: 'Hicking Group', groupMembers: ['Silco', 'Jinx', 'Caitlyn']},
    {groupName: 'Swimming Group', groupMembers: ['Silco', 'Jinx']}
  ];

  getUsers() {
    return this.groups.slice();
  }

  getGroupItem() {
    return this.groupItem;
  }

  addGroup(group: Group) {
    this.groups.push(group);
    this.groupChange.emit(this.groups);
  }

  onChooseGroup(group: Group) {
    this.groupItem = group;
    this.groupItemChange.emit(group);
  }

  addUser(group: Group, name: string) {
    let index = this.groups.indexOf(group);
    const existingName = this.groups[index].groupMembers.find(currentValue => currentValue === name);

    if (!existingName) {
      this.groups[index].groupMembers.push(name);
    }
  }
}
