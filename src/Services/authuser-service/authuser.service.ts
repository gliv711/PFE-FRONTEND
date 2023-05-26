import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  api = 'http://localhost:8084/api/login';

  helper=new JwtHelperService()
  constructor(private http:HttpClient) {}
   login(email:string,password:string){
    return this.http.post(this.api+"?email="+email+"&password="+password,{});
}
SaveDataProfil(accesstoken:string,refreshtoken:string){
 
 localStorage.setItem('accesstoken',accesstoken);
 localStorage.setItem('refreshtoken',refreshtoken);
}
}
