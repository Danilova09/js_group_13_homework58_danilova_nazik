import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-item-list',
  templateUrl: './group-item-list.component.html',
  styleUrls: ['./group-item-list.component.css']
})
export class GroupItemListComponent {
  @Input() groupMember!: string;
}
