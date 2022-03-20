import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators'
import { Router } from "@angular/router";

import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    this.http
    .get<{
      message: string;
      users: any
    }>("http://localhost:3000/users")
    .pipe(map(userData => {
      return userData.users.map(user => {
        return {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          userName: user.userName,
          password: user.password,
          personal: user.personal,
          business: user.business
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

  getUser(id: string) {
    return this.http.get
    <{_id: string,
      firstName: string,
      lastName: string,
      email: string,
      userName: string,
      password: string,
      personal: boolean,
      business: boolean,
    }>("http://localhost:3000/users/" + id);
  }

  addUser(
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    personal: boolean,
    business: boolean)
    {
    const user: User =
    {
      _id: null,
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
      personal: personal,
      business: business
    };
    this.http
      .post<{ message: string, userId: string }>("http://localhost:3000/reg", user)
      .subscribe(responseData => {
        const id = responseData.userId;
        user._id = id;
        this.users.push(user);
        this.usersUpdated.next([...this.users]);
        this.router.navigate(["/"]);
      });
  }

  updateUser(
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    personal: boolean,
    business: boolean)
    {
    const user: User =
    { _id: null,
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
      personal: personal,
      business: business
    };
    this.http.put("http://localhost:3000/users/" + _id, user)
    .subscribe(response => {
      const updatedUsers = [...this.users];
      const oldUserIndex = updatedUsers.findIndex(p => p._id === user._id);
      updatedUsers[oldUserIndex] = user;
      this.users = updatedUsers;
      this.usersUpdated.next([...this.users]);
      this.router.navigate(["/"]);
    });
  }

  deleteUser(userId: string) {
    this.http.delete("http://localhost:3000/users/" + userId)
    .subscribe(() => {
      const updatedUsers = this.users.filter(user => user._id !== userId);
      this.users = updatedUsers;
      this.usersUpdated.next([...this.users]);
    });
  }
}
