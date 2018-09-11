import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TSRoutingModule } from './ticket-seller.routing';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { ListSeatsComponent } from './list-seats/list-seats.component';




@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TSRoutingModule
    ],
    declarations: [
        SearchTicketComponent,
        ListTicketsComponent,
        ListSeatsComponent,
     
    ],

})

export class tiketSellerModule {

}