import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  api = environment.baseUrl+'/USER-MANAGEMENT/api/login';
  // api = 'http://localhost:8084/api/login';


  helper=new JwtHelperService()
  constructor(private http:HttpClient) {}
   login(email:string,password:string){
    return this.http.post(this.api+"?email="+email+"&password="+password,{});
}
SaveDataProfil(accesstoken:string,refreshtoken:string){
 
 localStorage.setItem('accesstoken',accesstoken);
 localStorage.setItem('refreshtoken',refreshtoken);
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
  if(role!=="user"){
    return false}
  if(this.helper.isTokenExpired(refreshtoken)){
    return false
  }
  return true
   

}
loggedcompany(){
  let accesstoken:any=localStorage.getItem('accesstoken')
  let decodeaccesToken= this.helper.decodeToken(accesstoken)
  let refreshtoken:any=localStorage.getItem('refreshtoken')
  let decoderefreshToken= this.helper.decodeToken(refreshtoken)

  localStorage.setItem("role",decodeaccesToken.roles)
  let role=decodeaccesToken.roles
  
  // if(!localStorage.getItem(accesstoken)){
  //   return false
  // }
  if(role!=="company"){
    return false}
  if(this.helper.isTokenExpired(refreshtoken)){
    return false
  }
  return true
   
}

}
