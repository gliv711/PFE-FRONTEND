import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  myform : any ;

  constructor(private router: Router ,private formbuilder : FormBuilder) { 
    this.myform = this.formbuilder.group({
      adresse: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      region: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      telephone :['',[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[0-9]*')]]

    })
  
    }

  ngOnInit(): void {
  }
  Onclick():any {
    if (this.myform.valid) {
      this.router.navigate(['/step2']);
    }
  }
}
