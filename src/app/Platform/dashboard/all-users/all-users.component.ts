  import { Component, OnInit } from '@angular/core';
  import { User } from 'src/Models/User';
  import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { Role } from 'src/enums/role.enum';

  @Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
  })
  export class AllUsersComponent implements OnInit {
    Users: User[] = [];
    user : User = {};
    constructor(private UserService : UserServiceService) {this.getUsers(); }

    roles = Object.values(Role);


    getUsers(){
      this.UserService.getUsers().subscribe({
        next: (response: User[]) => {
          this.Users = response;
        },
        error: (e) => console.log(e),
        complete: () => {}
      })
    }

    deleteUser(user : User){
      this.UserService.deleteUser(user).subscribe({
        next: () => {
          this.getUsers();
        },
        error: (e) => console.log(e),
        
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
        },
        error: (e) => console.log(e),
        complete: () => {
          

        }
      })
    }

  

    ngOnInit(): void {
    }

  }
