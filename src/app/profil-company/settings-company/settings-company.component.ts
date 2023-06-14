import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Company } from 'src/Models/Users/Company';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-settings-company',
  templateUrl: './settings-company.component.html',
  styleUrls: ['./settings-company.component.css']
})
export class SettingsCompanyComponent implements OnInit {
 

  constructor(private userService : UserServiceService,private sanitizer: DomSanitizer) { }
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


  ngOnInit(): void {
    const email: string = this.getemail(); 
    this.getCompanyByEmail(email).subscribe(
      (company: Company) => {
        console.log(company);
        this.company = company;

      },
      (error: any) => {
        console.error(error);
      }
    );

  }

  company: Company = {
    nameofCompany: '',
    domaineofActivity: '',
    nameofResponsible: '',
    phone_number: '',
    address: '',
    socialReason: '',
    email: ''
  };
  // updateMessage: string;
  // updateSuccess: boolean;  
  // updateProfile(company:Company) {
  //   this.userService.updateCompany(company).subscribe(
  //     response => {
  //       this.updateMessage = "Profile updated successfully.";
  //       this.updateSuccess = true;
  //       setTimeout(() => {
  //         this.updateMessage = null;
  //         this.updateSuccess = false;
  //       }, 3000)
  //     },
  //     error => {
  //       this.updateMessage = "Failed to update profile.";
  //       this.updateSuccess = false;
  //       setTimeout(() => {
  //         this.updateMessage = null;
  //         this.updateSuccess = false;
  //       }, 3000)
  //     }
  //   );
  // }

  getCompanyByEmail(email: string): Observable<Company> {
    return this.userService.getCompanyByEmail(email);
  }

  helper = new JwtHelperService();

  getemail(): string {
    const accessToken: any = localStorage.getItem('accesstoken');
    const decodeAccessToken = this.helper.decodeToken(accessToken);
    console.log(decodeAccessToken.sub);
    return decodeAccessToken.sub;
  }
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
   formData.append('nameofCompany', company.nameofCompany+"");
   formData.append('nameofResponsible', company.nameofResponsible+"");
   formData.append('phone_number', company.phone_number+"");
   formData.append('password', company.password+"");


 
   if (this.currentFile != null) {
     formData.append('picture_file',this.currentFile,this.currentFile?.name);
   }
   this.userService.AddCompany(formData).subscribe({
     next: () => {
       
       console.log(formData);
       setTimeout(() => {
        
       }, 3000);
     },
     error: (e) => {
       console.log(e);
   
     },
     complete: () => {
       
     }
   });
 }
}
