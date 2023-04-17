import { Component, OnInit } from '@angular/core';
import { User_Login } from 'src/Models/User_Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_info : User_Login = {};
  constructor(private router: Router) { }
  onSubmit() {
    if (this.user_info.username === 'root' && this.user_info.password === 'root') {
      this.router.navigate(['/admin']);
    } else {
      // handle invalid login
    }
  }
  ngOnInit(): void {
  }

}
