import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserServiceService } from 'src/Services/user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  Users: User[] = [];
  user : User = {};
  constructor(private UserService : UserServiceService) {this.getUsers(); }


  getUsers(){
    this.UserService.getUsers().subscribe({
      next: (response: User[]) => {
        this.Users = response;
      },
      error: (e) => console.log(e),
      complete: () => {}
    })
  }

  deleteUser(user:User){
    this.UserService.deleteUser(this.user).subscribe({
      next: () => {
        this.getUsers();
      },
      error: (e) => console.log(this.user),
      
      complete: () => {
        console.log("Deleted ! ")
      }
    })
  }

  addUser(){
    this.UserService.addUser(this.user).subscribe({
      next: () => {
        this.getUsers();
      },
      error: (e) => console.log(e),
      complete: () => {
        

      }
    })
  }

  setCurrentUser(user : User){
    this.user=user;
  }

  ngOnInit(): void {
  }

}
