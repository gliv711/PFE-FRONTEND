import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/Services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  api = environment.baseUrl+'8084/USER-MANAGEMENT/api';

  email: string = '';
  password: string = '';
  result: string = '';
  datarecieved:any
  constructor(private router: Router , private http: HttpClient,private authservice:AuthService) { 
  }
   
  onSubmit(){
    const credentials = {email : this.email,password:this.password};
    this.http.post(this.api+'/login', credentials).subscribe(
      (response: any) => {
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        console.log("you are not connected !");
      }
    );
  }


  //checkEmailAndPassword(): void {
  //  this.http.get(`/users/${this.email}/${this.password}`)
    //  .subscribe((response: any) => {
      //  this.result = response;
      //}, (error: any) => {
        //this.result = error.error;
      //});
  //}
  ngOnInit(): void {
  }

  //  login(f:any) {
  //    let data=f.value
  //    this.authservice.login(data.email,data.password).subscribe(Response =>{
  //      this.datarecieved=Response
  //     this.authservice.SaveDataProfil(
    // this.datarecieved.accesstoken,
    // this.datarecieved.refreshtoken);
      
  //     console.log(this.datarecieved);
      
  //    },err=>console.log(err));
     
     
  //  }


  login(f: any) {
    let data = f.value;
    this.authservice.login(data.email, data.password).subscribe(Response => {
      this.datarecieved = Response;
      this.authservice.SaveDataProfil(
      
        this.datarecieved.access_token, // Use access_token directly
        this.datarecieved.refresh_token // Use refresh_token directly
        

      );  
       this.router.navigate(['/dashboard'])
        
      console.log(this.datarecieved.access_token);
      console.log(this.datarecieved.refresh_token);
      console.log(this.datarecieved);
    }, error => console.log(error));
  }


}
