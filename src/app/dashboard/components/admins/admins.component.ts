import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/Models/Users/Company';
import { admin } from 'src/Models/Users/admin';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { Role } from 'src/enums/role.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidator } from 'src/email controle/EmailValidator';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  myForm: FormGroup;
  admins: admin[] = [];
  admin : admin = {};


  currentFile : File;

  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  constructor(private UserService : UserServiceService ,private authservice :AuthService,private router:Router,private formBuilder: FormBuilder,private emailValidator: EmailValidator,private sanitizer: DomSanitizer) {
    this.getAdmins(); 
    
  //   this.myForm = this.formBuilder.group({
  //     address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  //     phone_number: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]],
  //     email: [
  //       '',
  //       [Validators.required, Validators.email],
  //       [emailValidator.validate.bind(emailValidator)],
  //     ],
  //     password: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
  //   });
  this.myForm = this.formBuilder.group({
        address: ['', [Validators.required, ]],
        phone_number: ['', [Validators.required, ]],
        email: [
          '',
          [Validators.required, ],
          ,        ],
        password: ['', [Validators.required,]]
      });
  
   
   }

  roles = Object.values(Role);
  itemsPerPage = 10;
  currentPage = 1;

  getAdmins(){
    this.UserService.getAdmins().subscribe({
      next: (response: admin[]) => {
        this.admins = response;
        console.log(this.admins);
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }




  deleteAdmin(admin : admin){
    this.UserService.deleteAdmin(admin).subscribe({
      next: () => {
        this.getAdmins();
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


  setCurrentAdmin(admin : admin){
    this.admin=admin;
  }

  close(){
    this.admin= {};
  }





  
  
  
  


  

  ngOnInit(): void {
    
  }

  // AddUser() {
  //   if (this.myForm.invalid) {
  //     return;
  //   }
  //   const { phone_number, password, address, email } = this.myForm.value;
  //   const user = { phone_number, password, address, email };
  //   this.UserService.addadmin(user).subscribe({
      
  //     next: () => {
       
  //       this.getAdmins();
  //       this.mise_a_jour = true; 
  //       setTimeout(() => {
  //         this.mise_a_jour = false;
  //       }, 3000); 
  //     },
  //     error: (e) => {
  //       console.log(e);
  //       this.error = true;
  //     },
  //     complete: () => {
  //       this.close();
  //     }
  //   });
    
  // }

  onFileSelected(event : any) {

    this.currentFile = event.target.files[0];
    console.log("file selected")
}
getSrcFromCustomFile(admin : admin) {
  let uint8Array = new Uint8Array(atob(admin.picture.data).split("").map(char => char.charCodeAt(0)));
  let dwn = new Blob([uint8Array])
  return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(dwn));
}
  AddAdmin(admin:admin){
    const formData : FormData = new FormData();

    if (admin.id!=null)
    formData.append('id', admin.id+"");
    formData.append('email', admin.email+"");
    formData.append('address', admin.address+"");
    formData.append('phone_number', admin.phone_number+"");
    formData.append('password', admin.password+"");
    if (this.currentFile != null) {
      formData.append('picture_file',this.currentFile,this.currentFile?.name);
    }

    this.UserService.addAdmin(formData).subscribe({
      next: () => {
        this.getAdmins();
        console.log(formData)
        this.mise_a_jour=true; 
        setTimeout(() => {
          this.mise_a_jour = false;
        }, 3000); 
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {
        

      }
    })


   
  }
  
  }


