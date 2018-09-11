import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { ListSeatComponent } from '../booking/list-seat/list-seat.component';


const routes: Routes = [
    {
        path: 'ticket-seller', children: [
            { path: 'list-tickets', component: ListTicketsComponent },
            { path: 'list-seats', component:ListSeatComponent },
        
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TSRoutingModule { }