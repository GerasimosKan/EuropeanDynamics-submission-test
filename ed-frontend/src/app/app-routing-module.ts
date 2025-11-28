import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { RegisterUserComponent } from './components/register-user-component/register-user-component';
import { DisplayUsersComponent } from './components/display-users-component/display-users-component';
import { UserDetailComponent } from './components/user-detail-component/user-detail-component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: '', component: DisplayUsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
