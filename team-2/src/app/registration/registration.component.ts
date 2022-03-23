import { Component, OnInit } from '@angular/core';
import {  NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Registration } from "./registration.model";

import { RegistrationsService } from "./registrations.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  enteredFirstName: "";
  enteredLastName: "";
  enteredEmail: "";
  enteredUserName: "";
  enteredPassword: "";
  enteredPersonal: "";
  enteredBusiness: "";
  registration: Registration;
  private mode = 'create';
  private userId: string;

  constructor(public registrationsService: RegistrationsService, public route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if (paramMap.has('registrationId')) {
    //     this.mode = 'edit';
    //     this.userId = paramMap.get('userId');
    //     this.registrationsService.getUser(this.userId).subscribe(userData => {
    //       this.registration = {id: userData._id, firstName: userData.firstName, lastName: userData.lastName, email: userData.email, userName: userData.userName, password: userData.password, personal: userData.personal, business: userData.business, admin: userData.admin};
    //     });
    //     } else {
    //       this.mode = 'create';
    //       this.userId = null;
    //     }
    // });
  }


  onSaveRegistration(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.registrationsService.addRegistration(form.value.id, form.value.firstName, form.value.lastName, form.value.email, form.value.userName, form.value.password, form.value.personal, form.value.business);
    } else {
      this.registrationsService.addRegistration(this.userId, form.value.firstName, form.value.lastName, form.value.email, form.value.userName, form.value.password, form.value.personal, form.value.business);
    }
    form.resetForm();
  }
}
