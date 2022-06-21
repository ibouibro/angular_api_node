import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Publication } from './publication';
import { Observable } from 'rxjs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro_angular';
  
  

  constructor(public authService : AuthService){}
  logout() {
    this.authService.doLogout()
  }
  ngOnInit()
  {
    
  }




 

}
