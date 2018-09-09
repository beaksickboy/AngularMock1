import { UserService } from './../user.service';
import { User } from './../../share/user.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { User2 } from '../../share/user2.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  constructor(private userService: UserService) { }
  users: User2[] = this.userService.user;
  ngOnInit() {

    this.loadUser();

    this.userService.userChangeSubject.subscribe(
      (data) => this.loadUser()
    );
  }


  loadUser() {
    this.userService.getUsers().subscribe(
      (users) => { 
        console.log(users['content'])
        this.users= users['content']
      }
    );
  }



}
