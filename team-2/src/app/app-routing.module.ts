import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
