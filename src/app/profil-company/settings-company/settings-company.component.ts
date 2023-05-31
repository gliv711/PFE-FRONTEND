import { Component, OnInit } from '@angular/core';
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

  constructor(private userService : UserServiceService) { }

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
}
