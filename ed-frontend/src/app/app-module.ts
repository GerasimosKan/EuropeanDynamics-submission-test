import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app';
import { AppRoutingModule } from './app-routing-module';

import { HomeComponent } from './components/home-component/home-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { RegisterUserComponent } from './components/register-user-component/register-user-component';
import { DisplayUsersComponent } from './components/display-users-component/display-users-component';
import { UserDetailComponent } from './components/user-detail-component/user-detail-component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterUserComponent,
    DisplayUsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
