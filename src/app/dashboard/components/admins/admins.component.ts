import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/Models/Users/Company';
import { admin } from 'src/Models/Users/admin';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { Role } from 'src/enums/role.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidator } from 'src/email controle/EmailValidator';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  myForm: FormGroup;
  Users: admin[] = [];
  user : admin = {};



  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  constructor(private UserService : UserServiceService ,private authservice :AuthService,private router:Router,private formBuilder: FormBuilder,private emailValidator: EmailValidator) {
    
    this.myForm = this.formBuilder.group({
      address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      phone_number: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]],
      email: [
        '',
        [Validators.required, Validators.email],
        [emailValidator.validate.bind(emailValidator)],
      ],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
    });
    this.getUsers(); 
  this.authservice.loggedIn
  }

  roles = Object.values(Role);
  itemsPerPage = 10;
  currentPage = 1;

  getUsers(){
    this.UserService.getAdmins().subscribe({
      next: (response: admin[]) => {
        this.Users = response;
        console.log(this.Users);
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }




  deleteUser(user : Company){
    this.UserService.deleteAdmin(user).subscribe({
      next: () => {
        this.getUsers();
        this.supprimer=true;
        setTimeout(() => {
          this.supprimer = false;
        }, 3000); 
      },
      error: (e) =>  {console.log(e),this.error=true;},
      
      complete: () => {
        console.log("Deleted ! ")
      }
    })
  }


  setCurrentUser(user : admin){
    this.user=user;
  }

  close(){
    this.user= {};
  }





  
  
  
  


  

  ngOnInit(): void {
    
  }

  AddUser() {
    if (this.myForm.invalid) {
      return;
    }
    const { phone_number, password, address, email } = this.myForm.value;
    const user = { phone_number, password, address, email };
    this.UserService.addadmin(user).subscribe({
      
      next: () => {
       
        this.getUsers();
        this.mise_a_jour = true; 
        setTimeout(() => {
          this.mise_a_jour = false;
        }, 3000); 
      },
      error: (e) => {
        console.log(e);
        this.error = true;
      },
      complete: () => {
        this.close();
      }
    });
    
  }
  
  }


