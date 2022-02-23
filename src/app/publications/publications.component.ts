import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';
import { produits } from './produit';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  loginForm!: FormGroup;
 

  constructor(private fb: FormBuilder, private http: HttpClient){}
  
   prods! : produits[];

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      prix : [],
      description : [],
      image : [],
      date : [],
          });
this.http.get<produits[]>('http://127.0.0.1:8000/api/produits').subscribe(data => {
  
           this.prods = data;
            console.log("resultats",this.prods[0].nom);
            for (let i = 0; i < this.prods.length; i = i + 1) {
              console.log("resultats",this.prods[i].nom);
            }
            
          })  

         
         
          

  }

  login()
  {

   

    console.log('valeurs du formulaire',this.loginForm.value);
  }

}
