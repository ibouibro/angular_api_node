import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { PublicationsComponent } from './publications/publications.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { GetUserComponent } from './get-user/get-user.component';


@NgModule({
  declarations: [
    AppComponent,
    FormcomponentComponent,
    PublicationsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    GetUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
