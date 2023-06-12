import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/Models/Users/User';
import { Observable } from 'rxjs';
import { Company } from 'src/Models/Users/Company';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { admin } from 'src/Models/Users/admin';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
api = environment.baseUrl+'/USER-MANAGEMENT/api/user';
apicompany=environment.baseUrl+'/USER-MANAGEMENT/api/company';
apiadmin=environment.baseUrl+'/USER-MANAGEMENT/api/admin';
apisurvey=environment.baseUrl+'/SURVEY-MANAGEMENT/api/';



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
   return this.http.get<User[]>(this.api + '/all', { headers });
    }
   
    
    
    getAdmins() : Observable<admin[]>{
      const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
   return this.http.get<User[]>(this.apiadmin + '/all', { headers });
    }

    getAdminbyEmail(email : string ):Observable<admin>{
      const accessToken:any = localStorage.getItem('accesstoken');
      const refreshToken=localStorage.getItem('refreshtoken')

      var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;

     return this.http.get<admin>(this.apiadmin + '/email/'+email, { headers });

    }
    
  
  
  getoneUser(id:any): Observable <User[]>{

    return this.http.get<User[]>(this.api+id);
  }
  getUserByEmail(email: string): Observable<User> {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<User>(`${this.api}/email/${email}`);
  }

  addUser(formData : FormData) {
    console.log(formData)
    return this.http.post<User>(this.api,formData);

  }
  AddUser(user : User) {
    
    return this.http.post<User>(this.api,user);

  }
  updateUser(user : User) {
    
    return this.http.put<User>(this.api+"/update",user);

  }
  updateCompany(user : Company) {
    
    return this.http.put<Company>(this.apicompany+"/update",user);

  }
  updateAdmin(user : admin) {
    
    return this.http.put<admin>(this.apiadmin+"/update",user);

  }
  addadmin(user:admin) {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.post<admin>(this.apiadmin,user,{headers});

  }

  registrationAddUser(user : User) {
    return this.http.post<User>(environment.baseUrl+'/USER-MANAGEMENT/api/register/user', user);
  }
  

  deleteUser(user: User): Observable<User> {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.delete<User>(this.api+"/"+user.id,{headers});
  }
  deleteAdmin(user: admin): Observable<User> {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.delete<User>(this.apiadmin+"/"+user.id,{headers});
  }

  getUserCount(): Observable<number> {    
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.get<number>(this.api+'/count',{headers});
    };
  

  getAdminCount(): Observable<number>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.get<number>(this.apiadmin+'/count',{headers});
  }
  getCompanyCount(): Observable<number>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.get<number>(this.apicompany+'/count',{headers});
  }
    
   
    getsociete(): Observable <Company[]>{
      const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.get<Company[]>(this.apicompany+'/all',{headers});
    }
    getoneCompany(id:any): Observable <Company[]>{
      const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.get<Company[]>(this.apicompany+"/"+id,{headers})
    }
   
    deletesociete(Company: Company): Observable<Company> {
      const accessToken:any = localStorage.getItem('accesstoken');
      const refreshToken=localStorage.getItem('refreshtoken')
      var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.delete<Company>(this.apicompany+"/"+Company.id,{headers});
    }
    addCompany(Company:Company) {
      return this.http.post<Company>(this.apicompany,Company);
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

    getCompanyByEmail(email: string) : Observable<Company> {
      return this.http.get<Company>(`${this.apicompany}/email/${email}`);
    }
    checkIfUserEmailExists(email: string) {
      
  
      return this.http.get(this.api+"/check-email/"+email);
    }
    checkIfCompanyEmailExists(email: string) {
      
  
      return this.http.get(this.apicompany+"/check-email/"+email);
    }
    

  }

