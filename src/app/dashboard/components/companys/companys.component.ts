import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/Models/Users/Company';
import { User } from 'src/Models/Users/User';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { EmailCompanyValidator } from 'src/email controle/EmailCompanyValidator';
import { EmailValidator } from 'src/email controle/EmailValidator';
import { domaine } from 'src/enums/domaine';
import { Role } from 'src/enums/role.enum';

@Component({
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.css']
})
export class CompanysComponent implements OnInit {

  companys: Company[] = [];
  company : Company = {};



  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  constructor(private UserService : UserServiceService ,private authservice :AuthService,private formBuilder: FormBuilder,private emailValidator: EmailValidator) {
    this.getCompanys(); 
  
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


  getCompanys(){
    this.UserService.getsociete().subscribe({
      next: (response: User[]) => {
        this.companys = response;
        console.log(this.companys);
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }




  deleteCompany(company : Company){
    this.UserService.deletesociete(company).subscribe({
      next: () => {
        this.getCompanys();
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


  setCurrentCompany(company : User){
    this.company=company;
  }

  close(){
    this.company= {};
  }

  currentFile : File;

  addCompany() {
    if (this.myForm.invalid) {
      return;
    }
  
    const formData: FormData = new FormData();
    formData.append('nameofCompany', this.myForm.value['nameofCompany']);
    formData.append('nameofResponsible', this.myForm.value['nameofResponsible']);
    formData.append('email', this.myForm.value['email']);
    formData.append('password', this.myForm.value['password']);
    formData.append('phone_number', this.myForm.value['phone_number']);
    formData.append('address', this.myForm.value['address']);
    formData.append('domaineofActivity', this.myForm.value['domaineofActivity']);
  
    if (this.currentFile != null) {
      formData.append('picture_file',this.currentFile,this.currentFile?.name);
    }
    this.UserService.AddCompany(formData).subscribe({
      next: () => {
        this.getCompanys();
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
  updateCompany() {
    
    if (this.myForm.invalid) {
      return;
    }
  
    const company = {
      nameofCompany: this.myForm.value['nameofCompany'],
      nameofResponsible: this.myForm.value['nameofResponsible'],
      email: this.myForm.value['email'],
      password: this.myForm.value['password'],
      phone_number: this.myForm.value['phone_number'],
      address: this.myForm.value['address'],
      domaineofActivity: this.myForm.value['domaineofActivity']
    };
    if (
      this.myForm.controls['nameofCompany'].valid &&
      this.myForm.controls['nameofResponsible'].valid &&
      this.myForm.controls['password'].valid &&
      this.myForm.controls['phone_number'].valid &&
      this.myForm.controls['address'] &&
      this.myForm.controls['domaineofActivity'].valid
    ){
  
    this.UserService.addCompany(company).subscribe({
      next: () => {
        this.getCompanys();
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
  


  
  
  
  
  
  


  

  ngOnInit(): void {
  }

}



