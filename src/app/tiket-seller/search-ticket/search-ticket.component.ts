import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import {TicketSellerService} from '../ticket-seller.service'
import { Router } from '@angular/router';

@Component({
  selector: 'search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {
  
  search: FormGroup;
  constructor(private fb: FormBuilder, private ticketSellerService: TicketSellerService, private route: Router) { }

  ngOnInit() {
    this.search=this.fb.group({
      searchVal:['']
    })
  }

  Find(){
    const searchValue= this.search.value['searchVal'];

    this.ticketSellerService.findByUserId(+searchValue).subscribe(
      (data) => {
        this.ticketSellerService.ticket=data;
        this.ticketSellerService.ticketSearchSubject.next(true);
      }
    )
  }


}
