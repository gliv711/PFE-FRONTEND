import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/Models/Users/User';
import { Observable } from 'rxjs';
import { Company } from 'src/Models/Users/Company';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // api = environment.baseUrl+'/USER-MANAGEMENT/api/user/';
  api = 'http://localhost:8084/api/user/';

  //api = "localhost:8084/api/user/";
  image : any ;
  postResponse: any;
  dbImage: any;
  yourToken : string ="";
  helper=new JwtHelperService()

  constructor(private http : HttpClient) { }

  getUsers(): Observable <User[]>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    
    
   var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      let decodeaccesToken= this.helper.decodeToken(accessToken)
      if (this.helper.isTokenExpired(decodeaccesToken)) {
        this.refreshToken().subscribe(
          (response) => {
            const newAccessToken = response.access_token;
            const newRefreshToken = response.refresh_token;
      
            localStorage.setItem('accesstoken', newAccessToken);
            localStorage.setItem('refreshtoken', newRefreshToken);
      
            headers = new HttpHeaders().set('Authorization', 'Bearer ' + newAccessToken);
          },
          (error) => {
            console.log('tahcheee')
          }
        );
      }


      
      // const headers = {
      //   Authorization: `Bearer ${accessToken},
      //   ${refreshToken}`
      // };
      

    return this.http.get<User[]>(this.api + 'all', { headers });
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
    refreshToken() {
      const refreshToken = localStorage.getItem('refreshtoken'); // Remplacez par votre propre token de rafraîchissement
  
      const headers = {
        Authorization: `Bearer ${refreshToken}`,
      };
  
      return this.http.post<any>(this.api+"refreshtoken", {}, { headers });
    }
  
    

  }

