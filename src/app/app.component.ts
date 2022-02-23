import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Publication } from './publication';
import { Observable } from 'rxjs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro_angular';
  
  loginForm!: FormGroup;
  publications: Publication[]= [];

  constructor(private fb: FormBuilder, private http: HttpClient){}

  ngOnInit()
  {
    this.loginForm= this.fb.group({
prix : [],
description : [],
image : [],
date : [],
    });

    

   
   
   

   
  }




  login()
  {
    console.log('valeurs du formulaire',this.loginForm.value);

    this.http.get<Publication[]>('http://127.0.0.1:8000/api/liste/').subscribe(data => {
  
     this.publications=data;
     console.log('resultats ', this.publications[0].prix, this.publications[0].image, this.publications[0].date);
     
     for(let i=0; i < this.publications.length; i++)
     {
       console.log('resultats', this.publications[i].prix, this.publications[i].date, this.publications[i].image, this.publications[i].description );
     }
  })
  
  
 // creer publication
// this.http.post<any>('http://127.0.0.1:8000/api/create/',  this.loginForm.value ).subscribe(data => {
  // console.log('resultats requete ',data.data.image); 

//}) 

 let id =2 ;

this.http.put<any>('http://127.0.0.1:8000/api/update/'+id,  this.loginForm.value ).subscribe(data => {
   console.log('resultats requete update ',data.data.id); 
}) 

}
}
