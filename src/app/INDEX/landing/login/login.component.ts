import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { AuthguardsGuard } from 'src/guards/authguards.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { AuthService } from 'src/Services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   url :any
<<<<<<< Updated upstream
   urlcompany:any
=======
   urluser:any
>>>>>>> Stashed changes
   helper=new JwtHelperService()
  // api = environment.baseUrl+'8084/USER-MANAGEMENT/api';
  api = 'http://localhost:8084/api/login';


  email: string = '';
  password: string = '';
  result: string = '';
  datarecieved:any
  constructor(private activateRoute:ActivatedRoute,private router: Router , private http: HttpClient,private authservice:AuthService) { 
  }
  
  getrole(){
    let accesstoken:any=localStorage.getItem('accesstoken')
    let decodeaccesToken= this.helper.decodeToken(accesstoken)
    let role=decodeaccesToken.roles
    return role
  }
  
  ngOnInit(): void {
    this.urlcompany=this.activateRoute.snapshot.queryParams["saveUrl"]||'/company'
    
    this.url=this.activateRoute.snapshot.queryParams["saveUrl"]||'/dashboard'
    this.urluser=this.activateRoute.snapshot.queryParams["saveUrl"]||'/user'}
    
    
    
  

  
    
  login(f: any) {
    let data = f.value;
    this.authservice.login(data.email, data.password).subscribe(Response => {
      this.datarecieved = Response;
      this.authservice.SaveDataProfil(
      
        this.datarecieved.access_token, // Use access_token directly
        this.datarecieved.refresh_token // Use refresh_token directly
        

      );  
      let accesstoken:any=localStorage.getItem('accesstoken')
      let decodeaccesToken= this.helper.decodeToken(accesstoken)
      let role=decodeaccesToken.roles
      if(role=="admin"||role=='superAdmin'){
      this.router.navigate([this.url])}
      if(role=="user"){
        this.router.navigate([this.urluser])

      }
      if(role=="company"){
        this.router.navigate([this.urlcompany])
      }
        
     
    }, error => console.log(error));
  }


}
