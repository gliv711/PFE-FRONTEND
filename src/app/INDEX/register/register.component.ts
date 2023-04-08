import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: any ;
   

  constructor(private router: Router ,private formbuilder : FormBuilder)  { 
    this.myform = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confpassword: ['', [Validators.required, Validators.minLength(8), this.matchPasswords.bind(this)]]
    });
    const n :number=0}
    matchPasswords(control: FormControl) {
      const password = control.parent?.get('password');
      if (password && control.value !== password.value) {
        return { mismatch: true };
      }
      return null;
    }

  ngOnInit(): void {
  }
  
  Onclick():any {
    if (this.myform.valid) {
      this.router.navigate(['/accordion']);
    }
  }
  

  

}
