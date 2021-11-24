import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from '../../shared/group.model';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent {
  @Input() choosenGroup = { choosenGroup: false };
  @Input() group!: Group;
  @Output() chooseGroup = new EventEmitter();

  onChooseGroup() {
    this.chooseGroup.emit();
    this.choosenGroup = { choosenGroup: true };
  }
}
