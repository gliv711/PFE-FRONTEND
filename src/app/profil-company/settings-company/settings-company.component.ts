import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-settings-company',
  templateUrl: './settings-company.component.html',
  styleUrls: ['./settings-company.component.css']
})
export class SettingsCompanyComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
    const email: string = this.getemail(); // Assuming 'getemail()' returns a string
    this.getUserByEmail(email); // Passing the 'email' variable instead of 'this.email'
  }

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

  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (user: User) => {
        this.user = user;
        this.user.domain = user.domain;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  helper = new JwtHelperService();

  getemail(): string {
    const accessToken: any = localStorage.getItem('accesstoken');
    const decodeAccessToken = this.helper.decodeToken(accessToken);
    console.log(decodeAccessToken.sub);
    return decodeAccessToken.sub;
  }
}
