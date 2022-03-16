import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators'
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    this.http
    .get<{ message: string; users: User[] }>(
      "http://localhost:3000/users"
    )
    .subscribe(userData => {
      this.users = userData.users;
      this.usersUpdated.next([...this.users]);
    });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(id: string) {
    return this.http.get<{userId: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean}>("http://localhost:3000/users/" + id);
  }

  // addUser(id: string, firstName: string, lastName: string,  userName: string, email: string, password: string, personal: boolean, business: boolean, admin: boolean) {
  //   const user: User = {
  //     id: null, firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, personal: personal, business: business, admin: admin
  //   };
  //   this.http
  //   .post<{ id: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean }>("http://localhost:3000/users", user)
  //     .subscribe(responseData => {
  //       const id = responseData.id;
  //       user.id = id;
  //       this.users.push(user);
  //       this.usersUpdated.next([...this.users]);
  //       this.router.navigate(["/"]);
  //     });
  // }

  updateUser(userId: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean) {
    const user: User = {
      id: userId, firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, personal: personal, business: business, admin: admin
    };
    this.http.put("http://localhost:3000/users/" + userId, user)
    .subscribe(response => {
      const updatedUsers = [...this.users];
      const oldUserIndex = updatedUsers.findIndex(p => p.id === user.id);
      updatedUsers[oldUserIndex] = user;
      this.users = updatedUsers;
      this.usersUpdated.next([...this.users]);
      this.router.navigate(["/"]);
    });
  }

  deleteUser(userId: string) {
    this.http.delete("http://localhost:3000/users/" + userId)
    .subscribe(() => {
      const updatedUsers = this.users.filter(user => user.id !== userId);
      this.users = updatedUsers;
      this.usersUpdated.next([...this.users]);
    });
  }

}
