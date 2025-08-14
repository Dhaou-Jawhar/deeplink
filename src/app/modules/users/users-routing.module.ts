import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'usersDashboard',
        pathMatch: 'full'
    },
    { path: 'usersDashboard', component: UsersListComponent },
    { path: 'list', component: UsersListComponent },
    { path: 'add', component: UsersAddComponent },
    { path: 'edit/:id', component: UsersUpdateComponent },
    { path: 'detail/:id', component: UsersDetailComponent },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { } 