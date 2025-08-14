import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersAddComponent,
    UsersUpdateComponent,
    UsersDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { } 