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
  enteredFirstName: "";
  enteredLastName: "";
  enteredEmail: "";
  enteredUserName: "";
  enteredPassword: "";
  enteredPersonal: "";
  enteredBusiness: "";
  user: User;
  private mode = 'create';
  private userId: string;

  constructor(public usercreateService: UserCreateService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.mode = 'edit';
        this.userId = paramMap.get('userId');
        this.usercreateService.getUser(this.userId).subscribe(userData => {
          this.user = {
            _id: userData._id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            userName: userData.userName,
            password: userData.password,
            personal: userData.personal,
            business: userData.business
          };
        });
        } else {
          this.mode = 'create';
          this.userId = null;
        }
    });
  }

  onSaveUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.usercreateService.adduser(
        form.value.firstName,
        form.value.lastName,
        form.value.email,
        form.value.userName,
        form.value.password,
        form.value.personal,
        form.value.business);
    } else {
      this.usercreateService.updateUser(
        this.userId,
        form.value.firstName,
        form.value.lastName,
        form.value.email,
        form.value.userName,
        form.value.password,
        form.value.personal,
        form.value.business);
    }
    form.resetForm();
  }
}
