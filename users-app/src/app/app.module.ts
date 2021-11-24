import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { NewGroupComponent } from './new-group/new-group.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersService } from './shared/users.service';
import { UserComponent } from './users/user/user.component';
import { GroupItemComponent } from './groups/group-item/group-item.component';
import { GroupsService } from './shared/groups.service';
import { GroupItemListComponent } from './groups/group-item/group-item-list/group-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewGroupComponent,
    UsersComponent,
    GroupsComponent,
    UserComponent,
    GroupItemComponent,
    GroupItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
