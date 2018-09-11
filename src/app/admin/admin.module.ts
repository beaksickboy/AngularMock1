import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule} from './admin-routing.module';

import { ListUsersComponent } from './list-users/list-users.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AdminRoutingModule],
    declarations: [
        ListUsersComponent,
        AdminHomeComponent,
        AddUsersComponent,
        EditUsersComponent,
    ]
})


export class AdminModule {
}
