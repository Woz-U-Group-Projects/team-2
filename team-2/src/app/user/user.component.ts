import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

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
