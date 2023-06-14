import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { admin } from 'src/Models/Users/admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private userService : UserServiceService,private formBuilder: FormBuilder,private sanitizer: DomSanitizer) { 
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone_number: ['', Validators.required]
    });
  }
  admin: admin = {
    
    email: '',
    phone_number: '',
    address: ''
  }; 
  ngOnInit(): void {
    const email: string = this.getemail(); // Assuming 'getemail()' returns a string
    this.getAdminByEmail(email); // Passing the 'email' variable instead of 'this.email'
  }
  currentFile : File;
  updateMessage: string;
updateSuccess: boolean;
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

  this.userService.addAdmin(formData).subscribe({
    next: () => {
      
      console.log(formData)
     
    },
   
    complete: () => {
      

    }
  })


 
}
  // updateProfile(admin:admin) {
  //   this.userService.updateAdmin(admin).subscribe(
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
  

  getAdminByEmail(email: string): void {
    this.userService.getAdminbyEmail(email).subscribe({
      next: (admin: admin) => {
        this.admin = admin;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  helper=new JwtHelperService()

  getemail(){
    let accesstoken:any= localStorage.getItem('accesstoken')
    let decodeaccesToken= this.helper.decodeToken(accesstoken)
    console.log(decodeaccesToken.sub)
    return decodeaccesToken.sub

}
saveProfile() {
  if (this.profileForm.invalid) {
    return;
    // Logic to save the profile
  } else {
    this.profileForm.markAllAsTouched();
  }
}
}

