
import { Chair, BookingService } from './../booking.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'list-seat',
  templateUrl: './list-seat.component.html',
  styleUrls: ['./list-seat.component.css']
})
export class ListSeatComponent implements OnInit {
  arrSeat: Chair[] = [];

  seatOrder: Chair[] = [];

  // @Output() addListSeats = new EventEmitter<Chair>();


 

  constructor(private chairService: BookingService) { }

  ngOnInit() {
    this.arrSeat = this.chairService.arrChair;
  }

  toggle(index: number, id: string) {

    const seat = this.arrSeat[index];

    seat.isAvailable = (seat.isAvailable === 0 ? 1 : 0);

    console.log(seat.isAvailable);

    if (this.arrSeat[index].isAvailable === 0) {
      this.chairService.seatOrder.push(seat);
      this.chairService.totalPrice += seat.price; 
      // console.log(seat);
      // console.log(this.chairService.totalPrice);
      this.chairService.eventPrice.next(this.chairService.totalPrice);
      
      
    } else {

      const spliceIndex = this.chairService.seatOrder.findIndex((e) => {
        return e.id === id;
      });

      this.chairService.seatOrder.splice(spliceIndex, 1);
      this.chairService.totalPrice -= seat.price; 
      this.chairService.eventPrice.next(this.chairService.totalPrice);
    }

  }

  
  getImage(status: number) {
    switch (status) {
      case 0:
        return '../../assets/green.svg';
      case 1:
        return '../../assets/black.svg';
      default:
        return '../../assets/red.svg';


    }
  }


}
