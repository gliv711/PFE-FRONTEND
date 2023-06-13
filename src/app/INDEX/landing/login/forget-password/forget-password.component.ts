import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private http :HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  email: string ='';
  code : string ='';

  api=environment.baseUrl+'/USER-MANAGEMENT/api/user/send-email/';
  api2=environment.baseUrl+'/USER-MANAGEMENT/api/user/verify/';
  
  sendEmail(): void {
    const url = this.api + this.email;

    this.http.post(url, {}).subscribe(
      (response) => {
        alert('Email sent successfully');
      },
      (error) => {
        console.error('Error:', error);
        if (error) {
          console.log('Error', error);
        }
        alert('Veuillez vérifier votre mail');
      }
    );
  }

  validateCode(): void {
    const url = this.api2 + this.email + '/' + this.code;
  
    this.http.post<any>(url, {}).subscribe(
      (response) => {
        if (response.message) {
          alert('Code Vérifié');
          this.router.navigate(['/reset-password']); // Redirect to the "resetpassword" page
        } else {
          console.error('Error:', response.error);
          alert('Mail Invalide');
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Veuillez vérifier votre code');
      }
    );
  }
  

}
