import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from 'src/Models/Company';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   api = environment.baseUrl+'8084/USER-MANAGEMENT/api/user/';
  //api = "localhost:8084/api/user/";
  constructor(private http : HttpClient) { }

  getUsers(): Observable <User[]>{
    return this.http.get<User[]>(this.api+'all');
  }
  getoneUser(id:any): Observable <User[]>{
    return this.http.get<User[]>(this.api+id);
  }

  addUser(user:User) {
    return this.http.post<User>(this.api,user);
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(this.api+user.id);
  }

  getUserCount(): Observable<number> {    
      return this.http.get<number>(this.api+'count');
    };
   
    getsociete(): Observable <Company[]>{
      return this.http.get<Company[]>(this.api+'all');
    }
    getoneCompany(id:any): Observable <Company[]>{
      return this.http.get<Company[]>(this.api+id);
    }
   
    deletesociete(Company: Company): Observable<Company> {
      return this.http.delete<Company>(this.api+Company.id);
    }
    addCompany(Company:Company) {
      return this.http.post<Company>(this.api,Company);
    }
   
    
  }

