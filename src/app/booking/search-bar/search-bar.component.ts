import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder} from '@angular/forms'
import { Routes } from '../../share/routes.model';
import {BookingService} from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm : FormGroup;
  routes:Routes[]=[];
  check:boolean;


  constructor(private fb:FormBuilder, private ser:BookingService, private router: Router) { }


  ngOnInit() {
    this.searchForm = this.fb.group({
      from: [null],
      to: [null],
      date: [null] 
    })

    this.getListFrom();
  }


//////////////
  convert(){
    let toVALUE = this.to.value;
    this.to.setValue( this.from.value);
    this.from.setValue(toVALUE);
  }

//////////////////

  getListFrom(){
    this.ser.getListFrom().subscribe((data:Routes[])=> { this.routes=data });
  }

/////////////////

  onsubmit(){
    if(this.searchForm.valid){
      console.log(this.searchForm.value);
      this.check=!this.check;
    }

    this.router.navigate(["/home/search"]);
  }

  ///////////////

  get from(){
    return this.searchForm.get('from') as FormControl
  }  

  //////////////

  get to(){
    return this.searchForm.get('to') as FormControl
  }
}
