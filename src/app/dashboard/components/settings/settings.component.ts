import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { admin } from 'src/Models/Users/admin';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private userService : UserServiceService) { }
  admin: admin = {
    
    email: '',
    phone_number: '',
    address: '',
    image:''
  }; 
  ngOnInit(): void {
    const email: string = this.getemail(); // Assuming 'getemail()' returns a string
    this.getAdminByEmail(email); // Passing the 'email' variable instead of 'this.email'
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
}
