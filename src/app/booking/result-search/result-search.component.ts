import { Component, OnInit } from '@angular/core';
import { Routes } from '../../share/routes.model';

@Component({
  selector: 'result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  routes:Routes[]=[
    {id:1,to:"HCM",from:"HN",date:"25/8/2018" ,price:500000},
    {id:1,to:"HCM",from:"HN",date:"25/8/2018" ,price:500000},
    {id:1,to:"HCM",from:"HN",date:"25/8/2018" ,price:500000}
  ];
  constructor() { }

  ngOnInit() {
  }

}
