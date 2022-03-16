import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';

import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  // enteredUserId: "";
  // enteredFirstName: "";
  // enteredLastName: "";
  // enteredEmail: "";
  // enteredUserName: "";
  // enteredPassword: "";
  // enteredPersonal: "";
  // enteredBusiness: "";
  // enteredAdmin: "";
  users: User[] = [];
  private usersSub: Subscription = new Subscription;

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers();
    this.usersSub = this.usersService.getUserUpdateListener()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  onDelete(userId: string) {
    this.usersService.deleteUser(userId);
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }
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
// }
