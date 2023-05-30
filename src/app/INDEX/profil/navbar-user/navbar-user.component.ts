import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

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
  constructor(private route:Router, private userService : UserServiceService) { }

  ngOnInit(): void {
    const email: string = this.getemail(); // Assuming 'getemail()' returns a string
    this.getUserByEmail(email); // Passing the 'email' variable instead of 'this.email'
  }
  logout(){
    localStorage.removeItem("accesstoken")
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("role");
    this.route.navigate(['/login'])
  }
  helper = new JwtHelperService();

  getemail(){
    let accesstoken:any= localStorage.getItem('accesstoken')
    let decodeaccesToken= this.helper.decodeToken(accesstoken)
    console.log(decodeaccesToken.sub)
    return decodeaccesToken.sub

}
  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (user: User) => {
        this.user = user;
        this.user.domain=user.domain;
        console.log(user.domain);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
