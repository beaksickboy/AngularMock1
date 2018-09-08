import { Component, OnInit } from '@angular/core';
import {Chair} from '../booking.service';
import {User} from '../../share/user.model';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {BookingRoutingModule} from '../booking-routing.module'
@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {
  listChair: Chair[]=[]
  infoUser: User;
  formBook : FormGroup;
  constructor(private fb: FormBuilder,private  router:Router) { }

  ngOnInit() {
    this.formBook=this.fb.group({
      name:[''],
      uname:[''],
      email:[''],
      phone:[''],
      seatID:['', Validators.required],
      totalPrice:[''],
    })
  }
  
  submit(){

    this.router.navigate(["/checkOut"]);
   }
}
