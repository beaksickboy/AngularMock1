import { UserService } from './../user.service';
import { User } from './../../share/user.model';
import { Component, OnInit } from '@angular/core';

import 'datatables.net';
import 'datatables.net-bs4';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UserService, private pagerService: PagerService) { }

  users: User[] = this.userService.user;
  totalPages: number[];
  currentPage: number;
  maxPage: number;
  pager: any = {};

  ngOnInit() {

    this.loadUser();

    this.userService.userChangeSubject.subscribe(
      (data) => this.loadUser()
    );
  }

  loadUser() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users['content'];
        this.totalPages = new Array(users['totalPages']);
        this.currentPage = users['pageable']['pageNumber'];
        this.maxPage = this.totalPages.length - 1;
      }
    );
  }

  loadUserByIndex(index) {
    this.currentPage = index;
    this.userService.getListUserByPage(this.currentPage).subscribe(
      (users) => {
        this.users = users['content'];
      }
    );
  }

  loadUserForNextPage() {
    if (this.currentPage < this.totalPages.length - 1) {
      this.currentPage = this.currentPage + 1;
      this.userService.getListUserByPage(this.currentPage).subscribe(
        (users) => {
          this.users = users['content'];
        }
      );
    }
  }

  loadUserForPreviousPage() {
    if (this.currentPage !== 0) {
      this.currentPage = this.currentPage - 1;
      this.userService.getListUserByPage(this.currentPage).subscribe(
        (users) => {
          this.users = users['content'];
        }
      );
    }
  }


}
