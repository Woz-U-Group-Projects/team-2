import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    this.http
    .get<{ message: string; users: any }>(
      "http://localhost:3000/users"
    )
    .pipe(map(userData => {
      return userData.users.map(user => {
        return {
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          userName: user.userName,
          password: user.password,
          personal: user.personal,
          business: user.business,
          admin: user.admin
        };
      });
    })
    )
    .subscribe(transformedUsers => {
      this.users = transformedUsers;
      this.usersUpdated.next([...this.users]);
    });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(userId: string) {
    return this.http.get<{userId: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean}>("http://localhost:3000/users/" + userId);
  }

  addUser(userId: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean) {
    const user: User = {
      userId: null, firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, personal: personal, business: business, admin: admin
    };
    this.http
      .user<{ message: string, userId: string }>("http://localhost:3000/users", user)
      .subscribe(responseData => {
        const id = responseData.userId;
        user.userId = id;
        this.users.push(user);
        this.usersUpdated.next([...this.users]);
        this.router.navigate(["/"]);
      });
  }

  updateUser(userId: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean) {
    const user: User = {
      userId: userId, firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, personal: personal, business: business, admin: admin
    };
    this.http.put("http://localhost:3000/users/" + userId, user)
    .subscribe(response => {
      const updatedUsers = [...this.users];
      const oldUserIndex = updatedUsers.findIndex(p => p.userId === user.userId);
      updatedUsers[oldUserIndex] = user;
      this.users = updatedUsers;
      this.usersUpdated.next([...this.users]);
      this.router.navigate(["/"]);
    });
  }

  deleteUser(userId: string) {
    this.http.delete("http://localhost:3000/users/" + userId)
    .subscribe(() => {
      const updatedUsers = this.users.filter(user => user.userId !== userId);
      this.users = updatedUsers;
      this.usersUpdated.next([...this.users]);
    });
  }

}
