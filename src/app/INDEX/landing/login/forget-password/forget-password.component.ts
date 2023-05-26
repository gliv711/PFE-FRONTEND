import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
  }
  email: string ='';

  api=environment.baseUrl+'/USER-MANAGEMENT/api/user/send-email/';
  sendEmail(): void {
    const url = this.api + this.email;

    this.http.post(url, {}).subscribe(
      () => {
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

}
