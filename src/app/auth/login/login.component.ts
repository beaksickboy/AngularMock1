import { sOut, sIn } from './../auth.animation';


import { AuthService } from './../auth.service';
import { User } from '../../share/user.model';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    sIn,
    sOut
  ]
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  inProgress: boolean;
  state = 'normal';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });

  }


  login() {
    console.log(this.formLogin);
    this.inProgress = true;

    this.authService.checkUserAccount(this.username.value, this.password.value).subscribe(
      (user: User) => {
        console.log(user);

        if (+user.role.roleId === 0) {
          this.authService.isAdmin = true;
          this.router.navigate(['/listUsers']);
        } else {
          this.authService.isAdmin = false;
          this.router.navigate(['/home']);
        }
        this.authService.user = user;
        this.authService.isLogin = true;


      },
      (error) => {
        this.inProgress = false;
      },
      () => {
        this.inProgress = false;
      }
    );

  }

  // navigateSignUp() {

  //   this.router.navigate(['/signup']);
  //   this.inProgress = !this.inProgress;
  // }

  activeAnimation() {
    this.state = 'out';
    setTimeout(() => {
      this.router.navigate(['/signup']);
    }, 700);
  }

  get username() {
    return this.formLogin.get('username') as FormControl;
  }

  get password() {
    return this.formLogin.get('password') as FormControl;
  }
}
