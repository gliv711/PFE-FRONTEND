import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/Models/Users/Company';
import { User } from 'src/Models/Users/User';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { EmailCompanyValidator } from 'src/email controle/EmailCompanyValidator';
import { domaine } from 'src/enums/domaine';
import { Role } from 'src/enums/role.enum';

@Component({
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.css']
})
export class CompanysComponent implements OnInit {

  Users: Company[] = [];
  user : Company = {};



  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  constructor(private UserService : UserServiceService ,private authservice :AuthService,private formBuilder: FormBuilder,private emailValidator: EmailCompanyValidator) {
    this.getUsers(); 
  
    this.myForm = this.formBuilder.group({
      nameofCompany: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZÀ-ÿ ]*'), Validators.maxLength(30)]],
      nameofResponsible: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZÀ-ÿ ]*'), Validators.maxLength(30)]],
      email: [
        '',
        [Validators.required, Validators.email],
        [emailValidator.validate.bind(emailValidator)],
      ],     
       password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      phone_number: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[0-9]*')]],
      address: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZÀ-ÿ ]*'), Validators.maxLength(30)]],
    });
  }

  roles = Object.values(domaine);
  itemsPerPage = 10;
  currentPage = 1;
  myForm: FormGroup;


  getUsers(){
    this.UserService.getsociete().subscribe({
      next: (response: User[]) => {
        this.Users = response;
        console.log(this.Users);
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }




  deleteUser(user : Company){
    this.UserService.deletesociete(user).subscribe({
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


  setCurrentUser(user : User){
    this.user=user;
  }

  close(){
    this.user= {};
  }


  AddUser() {
    if (this.myForm.invalid) {
      return;
    }
  
    const user = {
      nameofCompany: this.myForm.value['nameofCompany'],
      nameofResponsible: this.myForm.value['nameofResponsible'],
      email: this.myForm.value['email'],
      password: this.myForm.value['password'],
      phone_number: this.myForm.value['phone_number'],
      address: this.myForm.value['address'],
      domaineofActivity: this.myForm.value['domaineofActivity']
    };
  
    this.UserService.addCompany(user).subscribe({
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
  


  
  
  
  
  
  


  

  ngOnInit(): void {
  }

}



