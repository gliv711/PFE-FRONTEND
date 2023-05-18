import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/Models/Users/User';
import { Observable } from 'rxjs';
import { Company } from 'src/Models/Users/Company';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  api = environment.baseUrl+'/USER-MANAGEMENT/api/user/';

  //api = "localhost:8084/api/user/";
  image : any ;
  postResponse: any;
  dbImage: any;
 
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

 
    uploadImage(formData: FormData): Observable<any> {
      return this.http.post<any>(this.api + 'upload', formData);
    }
    addUserWithImage(formData: FormData) {
      return this.http.post(this.api, formData);
    }
    

  }

