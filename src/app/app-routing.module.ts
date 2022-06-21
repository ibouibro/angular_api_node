import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetUserComponent } from './get-user/get-user.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {  path: '', component: LoginComponent },
  {  path: 'home', component: HomeComponent },
  { path: 'user-profile', component: GetUserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
