import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  search: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.search = this.fb.group({
      searchuName: ['']
    })
  }

  onSubmit() {
    const s = this.search.value['searchuName'];
    console.log(s);
    this.userService.searchName(s).subscribe(
      (data) => {

        this.userService.user = data;
        this.userService.userSearchSubject.next(true);
      }
    )
  }


}
