import { AuthService } from '../auth.service';
import { sIn, sOut } from '../auth.animation';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { existUsername, CustomValidate } from './custom-validate';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [
    sIn, sOut
  ]
})
export class SignUpComponent implements OnInit {
  static confirmVal: string = null;
  formSignup: FormGroup;
  state = 'normal';


  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.formSignup = this.fb.group({

      'fullname': [null, Validators.required],

      'email': [null, [Validators.required, Validators.email]],

      'username': [null, Validators.required, existUsername(this.authService)],

      'passGroup': this.fb.group({
        'password': [null, Validators.required],
        'confirm': [null, Validators.required]
      }, { validator: CustomValidate.MatchPassword })
    });

  }

  navigateToSignin() {
    this.state = 'out';
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 700);

  }

  signup() {
    this.authService.createCustomerAccount(this.formSignup.value).subscribe(
      (user) => {
        console.log(user);
        this.router.navigate(['/home']);
      }
    );
    console.log(this.formSignup);
    console.log(this.passGroup.hasError('conflictPassword'));
  }



  get fullName() {
    return this.formSignup.get('fullname') as FormControl;
  }

  get email() {
    return this.formSignup.get('email') as FormControl;
  }

  get username() {
    return this.formSignup.get('username') as FormControl;
  }

  get password() {
    return this.passGroup.get('password') as FormControl;
  }

  get confirm() {
    return this.passGroup.get('confirm') as FormControl;
  }

  get passGroup() {
    return this.formSignup.get('passGroup') as FormGroup;
  }



}
