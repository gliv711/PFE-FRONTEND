import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import { Result } from 'src/Models/Result';
import { Company } from 'src/Models/Users/Company';
import { User } from 'src/Models/Users/User';
import { DemandService } from 'src/Services/demand-service/demand.service';
import { ResultService } from 'src/Services/result-service/result.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  ngOnInit(): void {
    this.getUsersFromSurvey();
    
  
  }
  constructor(private demandService : DemandService,  private userService : UserServiceService,private resultService : ResultService) { }



  userSurvey : User ;
  users: User[];


  helper = new JwtHelperService();

  getemail(): string {
    const accessToken: any = localStorage.getItem('accesstoken');
    const decodeAccessToken = this.helper.decodeToken(accessToken);
    return decodeAccessToken.sub;
  }


  getUsersFromSurvey() {
    this.getCurrentCompanyDomain().subscribe((domain: string) => {
      this.userService.getUsersByDomain(domain).subscribe({
        next: (response: User[]) => {
          this.users = response;  // Assign the API response to this.users
          console.log(domain);
          console.log(this.users);
        },
        error: (e) => {
          console.log(domain);
          console.log(e);
        },
        complete: () => {}
      });
    });
  }
  
    
  
  getCurrentCompanyDomain(): Observable<string> {
    const email = this.getemail();
    return this.userService.getCompanyByEmail(email)
      .pipe(
        map((company: Company) => company.domaineofActivity)
      );
  }

  getUserByEmail(email: string): Observable<User> {
    return this.userService.getUserByEmail(email);
  }
  



 
  

  





}
