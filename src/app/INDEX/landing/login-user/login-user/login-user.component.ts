import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthuserService } from 'src/Services/authuser-service/authuser.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  datarecieved:any
  url:any 

  constructor(private authuser:AuthuserService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url=this.activateRoute.snapshot.queryParams["saveUrl"]||'/acceuil'

  }
  login(f:any){
    let data = f.value;
    this.authuser.login(data.email, data.password).subscribe(Response => {
      this.datarecieved = Response;
      this.authuser.SaveDataProfil(
      
        this.datarecieved.access_token, // Use access_token directly
        this.datarecieved.refresh_token // Use refresh_token directly
        

      );  
       this.router.navigate([this.url])
       console.log(this.datarecieved);
       
        
     
    }, error => console.log(error));
  }

  }
