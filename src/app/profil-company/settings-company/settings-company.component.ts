import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Company } from 'src/Models/Users/Company';
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
    const email: string = this.getemail(); 
    this.getUserByEmail(email); 
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

  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (company: Company) => {
        this.company = company;
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
