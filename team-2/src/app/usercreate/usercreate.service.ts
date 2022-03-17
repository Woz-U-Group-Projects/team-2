import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router, UrlSerializer } from "@angular/router";

import { UserCreateComponent } from "./usercreate.component";
import { User } from "./usercreate.model";

@Injectable({ providedIn: "root" })
export class UserCreateService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    this.http
      .get<{ message: string; users: any }>(
        "http://localhost:3000/reg"
      )
      .pipe(map(userData => {
        return userData.users.map(user => {
          return {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userName: user.userName,
            password: user.password,
            personal: user.personal,
            business: user.business,
            admin: user.admin,
            id: user._id
          };
        });
      })
      )
      .subscribe(transformedUsers => {
        this.users = transformedUsers;
        this.usersUpdated.next([...this.users]);
      });
  }

  getPostUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(id: string) {
    return this.http.get<{_id: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean}>("http://localhost:3000/user/" + id);
  }

  adduser(firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean) {
    const user: User = {
      id: null, firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, personal:personal, business: business, admin: admin
    };
    this.http
      .user<{ message: string, userId: string }>("http://localhost:3000/reg", user)
      .subscribe(responseData => {
        const id = responseData.postId;
        user.id = id;
        this.users.push(user);
        this.usersUpdated.next([...this.users]);
        this.router.navigate(["/"]);
      });
  }

  updatePost(id: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean) {
    const user: User = { id: null, firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, personal:personal, business: business, admin: admin };
    this.http.put("http://localhost:3000/users/" + id, user)
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
