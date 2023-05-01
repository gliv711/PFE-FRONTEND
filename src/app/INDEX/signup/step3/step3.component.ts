import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  myform : any;

  constructor(private router: Router ,private formbuilder : FormBuilder) { 
    this.myform = this.formbuilder.group({
      university :['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      domain:['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]]

    })

  }

  ngOnInit(): void {
  }
  Onclick():any {
    if (this.myform.valid) {
      this.router.navigate(['/step4']);
    }
  }

}
