import { Component, OnInit } from '@angular/core';
import { Company } from 'src/Models/Users/Company';
import { User } from 'src/Models/Users/User';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { Role } from 'src/enums/role.enum';

@Component({
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.css']
})
export class CompanysComponent implements OnInit {

  Users: Company[] = [];
  user : Company = {};



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
    this.UserService.getsociete().subscribe({
      next: (response: User[]) => {
        this.Users = response;
        console.log(this.Users);
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }




  deleteUser(user : Company){
    this.UserService.deletesociete(user).subscribe({
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


  setCurrentUser(user : User){
    this.user=user;
  }

  close(){
    this.user= {};
  }


  addUser(user:Company){
    this.UserService.addCompany(this.user).subscribe({
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



