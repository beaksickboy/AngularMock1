import { AuthService } from '../auth/auth.service';
import { UserService } from '../admin/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAdmin: boolean;
  login;
  constructor(private userService: UserService, public authService: AuthService) { }

  ngOnInit() {
  }

}
