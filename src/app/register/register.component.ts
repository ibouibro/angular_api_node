import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private authService:AuthService,private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.registerForm= this.fb.group({
      name : [],
      email : [],
      password : [],
      
          });

  }

  register()
  {
    console.log(this.registerForm.value)
    this.authService.signUp(this.registerForm.value).subscribe({
      next: data => {
          console.log(data)
          if(data)
          {
          this.registerForm.reset();
          this.router.navigate(['login']);
          }
      },
      error: error => {
          
          console.error('There was an error!', error);
      }
  })

}}
