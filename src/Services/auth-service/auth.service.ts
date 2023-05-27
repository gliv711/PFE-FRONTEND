import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // api = environment.baseUrl+'/USER-MANAGEMENT/api/login';
  api = 'http://localhost:8084/api/login';

 


  profile={
   accesstoken: '',
   refreshtoken:''
  }
  IsLoggedin:boolean=false
  helper=new JwtHelperService()
  constructor(private http:HttpClient) {}
   login(email:string,password:string){
    return this.http.post(this.api+"?email="+email+"&password="+password,{});
}
SaveDataProfil(accesstoken:string,refreshtoken:string){
 
 localStorage.setItem('accesstoken',accesstoken);
 localStorage.setItem('refreshtoken',refreshtoken);
//  let decodeToken= this.helper.decodeToken(accesstoken)
//  console.log(decodeToken);
//  localStorage.setItem("email",decodeToken.sub);
 
//  this.profile.accesstoken=accesstoken;
 
 
//   this.profile.refreshtoken=refreshtoken;
//  this.IsLoggedin=true;
 
}
loggedIn(){
  let accesstoken:any=localStorage.getItem('accesstoken')
  let decodeaccesToken= this.helper.decodeToken(accesstoken)
  let refreshtoken:any=localStorage.getItem('refreshtoken')
  let decoderefreshToken= this.helper.decodeToken(refreshtoken)

  localStorage.setItem("role",decodeaccesToken.roles)
  let role=decodeaccesToken.roles
  
  // if(!localStorage.getItem(accesstoken)){
  //   return false
  // }
  if(role!=="admin"&&role!=='superAdmin'){
    return false}
  if(this.helper.isTokenExpired(refreshtoken)){
    return false
  }
  return true
   
}
}
