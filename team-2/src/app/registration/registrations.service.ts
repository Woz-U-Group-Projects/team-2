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

  constructor(private http: HttpClient, private router: Router) { }

  addRegistration(firstName: string, lastName: string, userName: string, email: string, password: string, personal: boolean, business: boolean, admin: boolean) {
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

}
