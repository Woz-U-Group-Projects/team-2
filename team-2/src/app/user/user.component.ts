import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[] = [];

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.user = this.usersService.getUser();
    this.usersService.getUserUpdateListener()
    .subscribe((user: User[]) => {
      this.user = user;
    });
  }

}
