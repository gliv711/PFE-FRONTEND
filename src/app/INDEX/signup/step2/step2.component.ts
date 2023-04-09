import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  myform : any ;
  constructor(private router: Router ,private formbuilder : FormBuilder) { 
    this.myform = this.formbuilder.group({
      emplayeuractuel:['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      nomsociete:['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]]
    })


}

  ngOnInit(): void {
  }
  Onclick():any {
    if (this.myform.valid) {
      this.router.navigate(['/step3']);
    }
  }

}
