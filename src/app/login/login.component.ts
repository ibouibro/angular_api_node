import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  msg=""
  ngOnInit() {}
  loginUser() {
    this.authService.signIn(this.loginForm.value).subscribe({ next:res => {
      localStorage.setItem('access_token', res.access_token);
      
  
        
      
    },
    error : err => {
     this.loginForm.reset()
     this.msg="non autorisé"
     this.router.navigate(['login/']);
    }});
;
  }

}
