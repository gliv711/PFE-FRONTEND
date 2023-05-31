import {  Component, OnInit } from '@angular/core';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { Role } from 'src/enums/role.enum';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/Services/auth-service/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [DatePipe],
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {
  

  Users: User[] = [];
    user : User = {};

    currentFile : File;

    chargement =false ;
    mise_a_jour=false ;
    supprimer=false ;
    error = false ;
    constructor(private UserService : UserServiceService ,private authservice :AuthService, private sanitizer: DomSanitizer) {
      this.getUsers(); 
      this.authservice.loggedIn()
    }

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

    getSrcFromCustomFile(user : User) {
      let uint8Array = new Uint8Array(atob(user.picture.data).split("").map(char => char.charCodeAt(0)));
      let dwn = new Blob([uint8Array])
      return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(dwn));
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


    onFileSelected(event : any) {

      this.currentFile = event.target.files[0];
      console.log("file selected")
  }

    addUser(user:User){
      const formData: FormData = new FormData();
      formData.append('id', user.id+"");
      formData.append('name', user.name+"");
      formData.append('lastName', user.lastName+"");
      formData.append('email', user.email+"");
      formData.append('appRoles', "model have no app roles");
      formData.append('password', user.password+"");

      if (this.currentFile != null) {
        formData.append('picture_file',this.currentFile,this.currentFile?.name);
      }
      this.UserService.addUser(formData).subscribe({
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
