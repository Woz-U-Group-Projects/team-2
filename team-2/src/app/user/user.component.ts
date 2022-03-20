import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { User } from './user.model';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  enteredFirstName: "";
  enteredLastName: "";
  enteredEmail: "";
  enteredUserName: "";
  enteredPassword: "";
  enteredPersonal: "";
  enteredBusiness: "";
  users: User[] = [];
  private mode = 'create';
  private userId: string;
  private usersSub: Subscription = new Subscription;

  constructor(public usersService: UsersService, public route: ActivatedRoute) {}

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

  onSaveUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.usersService.addUser(
        form.value.firstName,
        form.value.lastName,
        form.value.email,
        form.value.userName,
        form.value.password,
        form.value.personal,
        form.value.business);
    } else {
      this.usersService.updateUser(
        this.userId,
        form.value.firstName,
        form.value.lastName,
        form.value.email,
        form.value.userName,
        form.value.password,
        form.value.personal,
        form.value.business);
      }
    form.resetForm();
  }
}
