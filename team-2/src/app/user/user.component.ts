import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { User } from './user.model';

import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  enteredUserId: "";
  enteredFirstName: "";
  enteredLastName: "";
  enteredEmail: "";
  enteredUserName: "";
  enteredPassword: "";
  enteredPersonal: "";
  enteredBusiness: "";
  enteredAdmin: "";
  user: User;
  private mode = 'create';
  private userId: string;

  constructor(public usersService: UsersService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.mode = 'edit';
        this.userId = paramMap.get('userId');
        this.usersService.getUser(this.userId).subscribe(userData => {
          this.user = {userId: userData.userId, firstName: userData.firstName, lastName: userData.lastName, email: userData.email, userName: userData.userName, password: userData.password, personal: userData.personal, business: userData.business, admin: userData.admin};
        });
        } else {
          this.mode = 'create';
          this.userId = null;
        }
    });
  }

//   onSaveUser(form: NgForm) {
//     if (form.invalid) {
//       return;
//     }
//     if (this.mode === 'create') {
//       this.usersService.addUser(form.value.userId, form.value.firstName, form.value.lastName, form.value.email, form.value.userName, form.value.password, form.value.personal, form.value.business, form.value.admin);
//     } else {
//       this.usersService.updateUser(this.userId, form.value.firstName, form.value.lastName, form.value.email, form.value.userName, form.value.password, form.value.personal, form.value.business, form.value.admin);
//     }
//     form.resetForm();
//   }
}
