import {  Component, OnInit } from '@angular/core';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { Role } from 'src/enums/role.enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [DatePipe],
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {

  Users: User[] = [];
    user : User = {};



    chargement =false ;
    mise_a_jour=false ;
    supprimer=false ;
    error = false ;
    constructor(private UserService : UserServiceService) {this.getUsers(); }

    roles = Object.values(Role);
    itemsPerPage = 10;
    currentPage = 1;
  
    getUsers(){
      this.UserService.getUsers().subscribe({
        next: (response: User[]) => {
          this.Users = response;
          console.log(this.Users);
        },
        error: (e) =>  {console.log(e),this.error=true;},
        complete: () => {}
      })
    }




    deleteUser(user : User){
      this.UserService.deleteUser(user).subscribe({
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


    addUser(user:User){
      this.UserService.addUser(this.user).subscribe({
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
