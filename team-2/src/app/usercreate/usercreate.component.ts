import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { User } from "./usercreate.model";

import { UserCreateService } from "./usercreate.service";

@Component({
  selector: "app-usercreate",
  templateUrl: "./usercreate.component.html",
  styleUrls: ["./usercreate.component.css"]
})
export class UserCreateComponent implements OnInit {
  enteredUserId: "";
  enteredFirstName: "";
  enteredLastName: "";
  enteredEmail: "";
  enteredUserName: "";
  enteredPassword: "";
  enteredPersonal: "";
  enteredBusiness: "";
  enteredAdmin: "";
  user: User;
  isLoading = false;
  private mode = 'create';
  private postId: string;

  constructor(public usercreateService: UserCreateService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.mode = 'edit';
        this.UserId = paramMap.get('userId');
        this.isLoading = true;
        this.usercreateService.getUser(this.postId).subscribe(userData => {
          this.isLoading = false;
          this.user = {id: userData._id, firstName: userData.firstName, lastName: userData.lastName, email: userData.email, userName: userData.userName, password: userData.password, personal: userData.personal, business: userData.business, admin: userData.admin};
        });
        } else {
          this.mode = 'create';
          this.postId = null;
        }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.usercreateService.adduser(form.value.firstName, form.value.lastName, form.value.email, form.value.userName, form.value.password, form.value.personal, form.value.business);
    } else {
      this.usercreateService.adduser(this.user, form.value.firstName, form.value.lastName, form.value.email, form.value.userName, form.value.password, form.value.personal, form.value.business);
    }
    form.resetForm();
  }
}
