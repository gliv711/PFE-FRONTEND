import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css']
})
export class NewPasswordFormComponent implements OnInit {
  newPassword: string = '';

  api = environment.baseUrl+'/USER-MANAGEMENT/api/user/update-password';

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  message: string = '';
  updatePassword() {
    const body = new URLSearchParams();
    body.set('newPassword', this.newPassword);

    this.http.post<any>(this.api, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe(
      response => {
        if (response && response.message) {
          this.message = "mise a jour fait avec succes"; 
          setTimeout(() => {
            this.router.navigate(['/login']); 
          }, 2000);
        } else {
          this.message = 'Une erreur s\'est produite.'; // Définir le message d'erreur générique
        }
      },
      error => {
        this.message = 'Erreur lors de la requête'; // Définir le message d'erreur de la requête
      }
    );
  }
}
