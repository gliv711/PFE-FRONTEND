import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  api = environment.baseUrl+'8084/USER-MANAGEMENT/api';

  email :String = '';
  password : String ='' ;
  constructor(private router: Router , private http: HttpClient) { }
   
  onSubmit(){
    const credentials = {email : this.email,password:this.password};
    this.http.post(this.api+'/login', credentials).subscribe(
      (response: any) => {
        this.router.navigate(['/admin']);
      },
      (error: any) => {
        console.log("you are not connected !");
      }
    );
  }
  ngOnInit(): void {
  }

}
