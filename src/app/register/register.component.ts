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
msg="";
  register()
  {
    let fo = this.registerForm.value
    if(fo.password == null || fo.name==null || fo.email==null)
    {
      this.msg="tous les champs doivent être remplis"
      this.router.navigate(['register']);
         return;
    } 
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fo.email)))
  {
    this.msg="email invalide"
      this.router.navigate(['register']);
       return;
  }

    if(this.registerForm.value.password.length<6)
    {
      this.msg="le mot de passe doit au moins faire 6 caractres"
      this.router.navigate(['register']);
         return;
    }
    console.log(this.registerForm.value)
    this.authService.signUp(this.registerForm.value).subscribe({
      next: data => {
          console.log(data.oki)
          if(data.oki==true)
          {
          this.registerForm.reset();
          this.router.navigate(['login']);
          }
          else{
            this.msg=data.msg
            this.router.navigate(['register']);
          }},
          error: err => {
            this.registerForm.reset()
            this.msg= " : erreur cet utilisateur existe"
            this.router.navigate(['register']);
          
          }
  })

}}
