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

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewGroupComponent,
    UsersComponent,
    GroupsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
