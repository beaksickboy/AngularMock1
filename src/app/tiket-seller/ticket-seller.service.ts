import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Ticket } from '../share/ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketSellerService {

  ticket: Ticket[] = [];
  ticketSearchSubject = new Subject<boolean>();
  ticketCancelSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get('http://localhost:8080/api/tickets/page=0');
  }

  findByBusId(id) {
    return this.http.get<Ticket[]>('http://localhost:8080/api/ticket/bus/' + id);
  }

  findByUserId(id) {
    return this.http.get<Ticket[]>('http://localhost:8080/api/ticket/uid/' + id);
  }

  cancelTicket(id, ticket ) {
    return this.http.put<Ticket>('http://localhost:8080/api/ticket/cancel/' + id, ticket);
  }
}
