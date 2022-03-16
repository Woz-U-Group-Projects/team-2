import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Registration } from "./registration.model";

@Injectable({ providedIn: "root" })

export class RegistrationsService {
  private registrations: Registration[] = [];
  private registrationsUpdated = new Subject<Registration[]>();

  constructor(private http: HttpClient, private router: Router) {}

  // getRegistrations() {
  //   this.http
  //     .get<{ message: string; registrations: any }>(
  //       "http://localhost:3000/registration"
  //     )
  //     .pipe(map(registrationData => {
  //       return registrationData.registrations.map(registration => {
  //         return {
  //           firstName: registration.firstName,
  //           lastName: registration.lastName,
  //           email: registration.email,
  //           userName: registration.userName,
  //           password: registration.password,
  //           personal: registration.personal,
  //           business: registration.business,
  //           id: registration._id
  //         };
  //       });
  //     })
  //     )
  //     .subscribe(transformedRegistrations => {
  //       this.registrations = transformedRegistrations;
  //       this.registrationsUpdated.next([...this.registrations]);
  //     });
  // }

  // getPostUpdateListener() {
  //   return this.registrationsUpdated.asObservable();
  // }

  // getPost(id: string) {
  //   return this.http.get<{_id: string, title: string, content: string}>("http://localhost:3000/posts/" + id);
  // }

   addRegistration(firstName: string, lastName: string,  userName: string, email: string, password: string, personal: boolean, business: boolean, admin: boolean) {
    const registration: Registration = {
      id: null, firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, personal: personal, business: business, admin: admin
    };
    this.http
    .post<{ id: string, firstName: string, lastName: string, email: string, userName: string, password: string, personal: boolean, business: boolean, admin: boolean }>("http://localhost:3000/registration", registration)
      .subscribe(responseData => {
        const id = responseData.id;
        registration.id = id;
        this.registrations.push(registration);
        this.registrationsUpdated.next([...this.registrations]);
        this.router.navigate(["/"]);
      });
  }

  // updatePost(id: string, title: string, content: string) {
  //   const post: Post = { id: id, title: title, content: content };
  //   this.http.put("http://localhost:3000/posts/" + id, post)
  //   .subscribe(response => {
  //     const updatedPosts = [...this.posts];
  //     const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
  //     updatedPosts[oldPostIndex] = post;
  //     this.posts = updatedPosts;
  //     this.postsUpdated.next([...this.posts]);
  //     this.router.navigate(["/"]);
  //   });
  // }

  // deletePost(postId: string) {
  //   this.http.delete("http://localhost:3000/posts/" + postId)
  //   .subscribe(() => {
  //     const updatedPosts = this.posts.filter(post => post.id !== postId);
  //     this.posts = updatedPosts;
  //     this.postsUpdated.next([...this.posts]);
  //   });
  // }

}
