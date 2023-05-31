import { Component, OnInit } from '@angular/core';
import { Company } from 'src/Models/Users/Company';
import { admin } from 'src/Models/Users/admin';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { Role } from 'src/enums/role.enum';
import {  } from '@angular/forms';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  myform:any

  Users: admin[] = [];
  user : admin = {};



  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  constructor(private UserService : UserServiceService ,private authservice :AuthService) {
    this.getUsers(); 
  
  this.authservice.loggedIn
  }

  roles = Object.values(Role);
  itemsPerPage = 10;
  currentPage = 1;

  getUsers(){
    this.UserService.getAdmins().subscribe({
      next: (response: admin[]) => {
        this.Users = response;
        console.log(this.Users);
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }




  deleteUser(user : Company){
    this.UserService.deleteAdmin(user).subscribe({
      next: () => {
        this.getUsers();
        this.supprimer=true;
        setTimeout(() => {
          this.supprimer = false;
        }, 3000); 
      },
      error: (e) =>  {console.log(e),this.error=true;},
      
      complete: () => {
        console.log("Deleted ! ")
      }
    })
  }


  setCurrentUser(user : admin){
    this.user=user;
  }

  close(){
    this.user= {};
  }


  addUser(user:admin){
    this.UserService.addadmin(this.user).subscribe({
      next: () => {
        this.getUsers();
        this.mise_a_jour=true; 
        setTimeout(() => {
          this.mise_a_jour = false;
        }, 3000); 
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {
        

      }
    })
  }


  
  
  
  
  
  


  

  ngOnInit(): void {
  }

}
