import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../share/ticket';
import { TicketSellerService } from '../ticket-seller.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  constructor(private ticketSellerService: TicketSellerService) { }

  tickets: Ticket[] = this.ticketSellerService.ticket;

  ngOnInit() {
    this.getAllTickets();

    this.ticketSellerService.ticketSearchSubject.subscribe(
      (data) => {
        this.tickets = this.ticketSellerService.ticket;
      }
    )

    this.ticketSellerService.ticketCancelSubject.subscribe(
      (data) => this.getAllTickets()
    )
  }

  getAllTickets() {
    this.ticketSellerService.getTickets().subscribe(
      (data) => {
        this.tickets = data['content'];
      }
    )
      ;
  }

  Cancel(id,ticket) {
    
    this.ticketSellerService.cancelTicket(id,ticket).subscribe(
      (data) => {
        this.ticketSellerService.ticketCancelSubject.next(true);
      }
    )
  }

}
