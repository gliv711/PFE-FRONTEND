import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth-service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  test: boolean;

  constructor(private route:Router,private roleServive:AuthService) { 

  // Assigner la valeur retournée par getRole() à test
  this.test = this.roleServive.getRole();
  }

  ngOnInit(): void {
  }
 
 
 
  logout(){
    localStorage.removeItem("accesstoken")
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem('role');
    this.route.navigate(['/login'])
  }
 

}
