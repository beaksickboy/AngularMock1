import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';


const routes: Routes = [
    {path: 'listUsers', component: ListUsersComponent},
    {path: 'adminHome', component: AdminHomeComponent},
    {path: 'addUser', component: AddUsersComponent},

    {path: 'editUser/:id', component: EditUsersComponent}
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AdminRoutingModule {

}
