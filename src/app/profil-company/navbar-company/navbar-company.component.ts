import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-company',
  templateUrl: './navbar-company.component.html',
  styleUrls: ['./navbar-company.component.css']
})
export class NavbarCompanyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("accesstoken")
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("role");
    this.route.navigate(['/login'])
  }
}
