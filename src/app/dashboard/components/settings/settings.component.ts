import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { admin } from 'src/Models/Users/admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private userService : UserServiceService,private formBuilder: FormBuilder) { 
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
  updateMessage: string;
updateSuccess: boolean;
  updateProfile(admin:admin) {
    this.userService.updateAdmin(admin).subscribe(
      response => {
        this.updateMessage = "Profile updated successfully.";
        this.updateSuccess = true;
        setTimeout(() => {
          this.updateMessage = null;
          this.updateSuccess = false;
        }, 3000)
      },
      error => {
        this.updateMessage = "Failed to update profile.";
        this.updateSuccess = false;
        setTimeout(() => {
          this.updateMessage = null;
          this.updateSuccess = false;
        }, 3000)
      }
    );
  }
  

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

