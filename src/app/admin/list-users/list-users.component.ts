import { UserService } from './../user.service';
import { User } from './../../share/user.model';
import { Component, OnInit } from '@angular/core';

import 'datatables.net';
import 'datatables.net-bs4';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = this.userService.user;
  totalPages: number[];
  currentPage = 1;
  maxPage: number;
  // pager: any = {};

  ngOnInit() {

    this.loadUser();

    this.userService.userChangeSubject.subscribe(
      (data) => this.loadUser()
    );

    this.userService.userSearchSubject.subscribe(
      (data) => this.users = this.userService.user
    );

  }

  loadUserByIndex(index) {
    this.currentPage = index;
    this.userService.getListUserByPage(this.currentPage - 1).subscribe(
      (users) => {
        this.users = users['content'];

      }
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



  // loadUserForNextPage() {
  //   if (this.currentPage < this.totalPages.length - 1) {
  //     this.currentPage = this.currentPage + 1;
  //     this.userService.getListUserByPage(this.currentPage).subscribe(
  //       (users) => {
  //         this.users = users['content'];
  //       }
  //     );
  //   }
  // }

  // loadUserForPreviousPage() {
  //   if (this.currentPage !== 0) {
  //     this.currentPage = this.currentPage - 1;
  //     this.userService.getListUserByPage(this.currentPage).subscribe(
  //       (users) => {
  //         this.users = users['content'];
  //       }
  //     );
  //   }
  // }


}
