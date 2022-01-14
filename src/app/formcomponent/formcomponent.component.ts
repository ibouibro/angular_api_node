import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
  }

}
