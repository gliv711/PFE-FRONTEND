import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("accesstoken")
    localStorage.removeItem("refreshtoken");
    this.route.navigate(['/loginuser'])
  }
}
