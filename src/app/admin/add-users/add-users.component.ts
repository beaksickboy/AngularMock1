import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../user.service';
import { User } from '../../share/user.model';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {


  formCreate: FormGroup;
  userRole: number = 0;

  constructor(private fb: FormBuilder, private route: Router, private us: UserService) { }

  ngOnInit() {
    this.formCreate = this.fb.group({
      name: ['', Validators.required],
      uname: ['', Validators.required],
      pass: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    })
  }



  createUser() {
    this.assignUser(this.formCreate.value);

  }


  assignUser(formvalue) {
    const user = {
      fullName: this.formCreate.value['name'],
      userName: this.formCreate.value['uname'],
      password: this.formCreate.value['pass'],
      email: this.formCreate.value['email']
    };


    this.us.addUser(this.userRole, user).subscribe(
      (data) => {
        this.us.userChangeSubject.next(true);
        this.route.navigate(['/admin/listUsers']);
      }
    )
   
  }

  generateValue(user: User) {

    this.formCreate.patchValue(
      {
        name: user.fullName,
        uname: user.userName,
        pass: user.password,
        email: user.email,

      }
    );

  }

  confirmCancel() {
    let a = confirm("Are you sure");
    if (true) {
      this.route.navigate(["/admin/listUsers"]);
    } else {

    }
  }

  changeRole(s) {
    this.userRole = s.value;
  }
}
