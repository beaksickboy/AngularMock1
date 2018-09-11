import { UserService } from '../user.service';
import { User } from '../../share/user.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  constructor(private userService: UserService) { }
  users: User[] = this.userService.user;

  ngOnInit() {

    this.loadUser();

    this.userService.userChangeSubject.subscribe(
      (data) => this.loadUser()
    );

    this.userService.userSearchSubject.subscribe(
      (data) => this.users = this.userService.user
    )
  }


  loadUser() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users['content'];
      }
    );
  }



}
