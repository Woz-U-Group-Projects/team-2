import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { WidgetComponent } from './widget/widget.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { BusinessPostCreateComponent } from './posts/business-post-create/business-post-create.component';
import { BusinessPostListComponent } from './posts/business-post-list/business-post-list.component';
import { UserCreateComponent } from './usercreate/usercreate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    PostCreateComponent,
    PostListComponent,
    WidgetComponent,
    SidebarComponent,
    BusinessProfileComponent,
    BusinessPostCreateComponent,
    BusinessPostListComponent,
    UserCreateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }
