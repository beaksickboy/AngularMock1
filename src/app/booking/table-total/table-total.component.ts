import { Component, OnInit, Input } from '@angular/core';
import { BookingService, Chair } from '../booking.service';

@Component({
  selector: 'table-total',
  templateUrl: './table-total.component.html',
  styleUrls: ['./table-total.component.css']
})
export class TableTotalComponent implements OnInit {


  totalSeat: Chair[];
  total: number;


  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.totalSeat = this.bookingService.seatOrder;

    /// Update price
    this.bookingService.eventPrice.subscribe(
      (price) => {
        this.total = price;
      }
    );
  }



}
