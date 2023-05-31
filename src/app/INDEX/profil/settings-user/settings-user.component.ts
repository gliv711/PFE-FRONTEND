import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {

  constructor(private userService : UserServiceService) { }
  user: User = {
    name: '',
    lastName: '',
    email: '',
    phone_number: '',
    address: '',
    region: '',
    university: '',
    domain: ''
  }; 
  ngOnInit(): void {
    const email: string = this.getemail(); 
    this.getUserByEmail(email);
  }
  

  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (user: User) => {
        this.user = user;
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
