import { Component, OnInit } from '@angular/core';
import { Routes } from '../../share/routes.model';

@Component({
  selector: 'result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  routes: Routes[] = [
    { routeId: 1, route: "aaaa", start: "HCM", end: "HN", startDate: "25/8/2018", startTime: "3:00", price: 500000 },
    { routeId: 1, route: "aaaa", start: "HCM", end: "HN", startDate: "25/8/2018", startTime: "17:30", price: 500000 },
    { routeId: 1, route: "aaaa", start: "HCM", end: "HN", startDate: "25/8/2018", startTime: "17:30", price: 500000 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
