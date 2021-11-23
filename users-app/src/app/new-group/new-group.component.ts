import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {
  @ViewChild('groupInput') groupInput!: ElementRef;
  createGroup() {
    const group = this.groupInput.nativeElement.value;
  }

}
