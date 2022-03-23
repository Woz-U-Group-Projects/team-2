import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { LoginComponent } from './login/login.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { WidgetComponent } from './widget/widget.component';
import { BusinessPostCreateComponent } from './posts/business-post-create/business-post-create.component';
import { BusinessPostListComponent } from './posts/business-post-list/business-post-list.component';
import { UserCreateComponent } from './usercreate/usercreate.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'edit/:postId',
    component: PostCreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'businessprofile',
    component: BusinessProfileComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: 'businesspost',
    component: BusinessPostCreateComponent
  },
  {
    path: 'businesspostlist',
    component: BusinessPostListComponent
  },
  {
    path: 'edit/:postId',
    component: PostCreateComponent
  },
  {
    path: 'allposts',
    component: PostListComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'reg',
    component: UserCreateComponent
  },
  {
    path: 'widget',
    component: WidgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
