import { Injectable } from '@angular/core';
// import { stringify } from 'querystring';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsersService {
  private user: User[] = [];
  private userUpdated = new Subject<User[]>();

  getUser() {
    return [...this.user];
  }

  getUserUpdateListener() {
    return this.userUpdated.asObservable();
  }

  addUser( userId: number,
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    admin: boolean) {
      // const user: User =
      // {userId: number,
      //   firstName: string,
      //   lastName: string,
      //   email: string,
      //   userName: string,
      //   password: string,
      //   admin: boolean};
      // this.user.push(user);
      // this.userUpdated.next([...this.user]);
  }
}
