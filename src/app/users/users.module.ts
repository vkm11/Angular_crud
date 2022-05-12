import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ListUsersComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ]
})
export class UsersModule { }
