import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(private UserService : UserServiceService ,private authservice :AuthService,private formBuilder: FormBuilder,private emailValidator: EmailValidator,private sanitizer: DomSanitizer) {
    this.getCompanys(); 
  
    
  }

  roles = Object.values(domaine);
  itemsPerPage = 10;
  currentPage = 1;
  myForm: FormGroup;


  getCompanys(){
    this.UserService.getsociete().subscribe({
      next: (response: Company[]) => {
        this.companys = response;
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
  getSrcFromCustomFile(company : Company) {
    let uint8Array = new Uint8Array(atob(company.picture.data).split("").map(char => char.charCodeAt(0)));
    let dwn = new Blob([uint8Array])
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(dwn));
  }
  onFileSelected(event : any) {

    this.currentFile = event.target.files[0];
    console.log("file selected")
}

  currentFile : File;

  addCompany(company : Company) {
   
     // formData.append('nameofCompany', this.myForm.value['nameofCompany']);
    // formData.append('nameofResponsible', this.myForm.value['nameofResponsible']);
    // formData.append('email', this.myForm.value['email']);
    // formData.append('password', this.myForm.value['password']);
    // formData.append('phone_number', this.myForm.value['phone_number']);
    // formData.append('address', this.myForm.value['address']);
    // formData.append('domaineofActivity', this.myForm.value['domaineofActivity']);

    const formData: FormData = new FormData();
 
    if(company.id!=null)
    formData.append('id', company.id+"");
    formData.append('address', company.address+"");
    formData.append('domaineofActivity', company.domaineofActivity+"");
    formData.append('email', company.email+"");
    formData.append('appRoles', "model have no app roles");
    formData.append('nameofCompany', company.nameofCompany+"");
    formData.append('nameofResponsible', company.nameofResponsible+"");
    formData.append('phone_number', company.phone_number+"");
    formData.append('password', company.password+"");


  
    if (this.currentFile != null) {
      formData.append('picture_file',this.currentFile,this.currentFile?.name);
    }
    this.UserService.AddCompany(formData).subscribe({
      next: () => {
        this.getCompanys();
        this.mise_a_jour = true;
        console.log(formData);
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



