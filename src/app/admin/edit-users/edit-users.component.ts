import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { User } from '../../share/user.model';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {


  editForm: FormGroup;
  userRole: number;
  userId: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private us: UserService,
    private loc: Location, private router: Router) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      uname: ['', Validators.required],
      pass: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    });

    this.getUser();

  }

  submit() {

    this.assignUser(this.editForm.value);


  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.us.getUser(id).subscribe(user => {

      this.userId = user.userId;
      this.generateValue(user);
      this.userRole = user.role.roleId;

    });
  }

  assignUser(formValue) {
    const user = {
      userId: this.userId,
      userName: this.editForm.value['uname'],
      password: this.editForm.value['pass'],
      email: this.editForm.value['email'],
      fullName: this.editForm.value['name'],
      role: {
        roleId: this.userRole
      }
    };
    console.log(user);
    this.us.updateUser(+this.userId, user).subscribe(
      (data) => {
        this.us.userChangeSubject.next(true);
        this.router.navigate(['/listUsers']);
      }
    );

  }

  generateValue(user: User) {

    this.editForm.patchValue(
      {
        name: user.fullName,
        uname: user.userName,
        pass: user.password,
        email: user.email,

      }
    );

  }

  getOption(s) {
    // console.log(s.value);
    this.userRole = s.value;
  }

  goBack() {
    this.loc.back();
  }
}
