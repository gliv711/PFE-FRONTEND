import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {

  constructor(private userService : UserServiceService,private sanitizer: DomSanitizer) { }
  user: User = {
    name: '',
    lastName: '',
    email: '',
    phone_number: '',
    address: '',
    region: '',
    university: '',
    domain: '',
    birthDate:new Date ,
    startofStudy :new Date ,
    endofStudy : new Date ,
    startofWork : new Date ,
    endofWork : new Date,
    picture : null
    
  }; 
  ngOnInit(): void {
    const email: string = this.getemail(); 
    this.getUserByEmail(email);
  }
  

  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (user: User) => {
        this.user = user;
        console.log(user)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  helper=new JwtHelperService()

  getemail(){
    let accesstoken:any= localStorage.getItem('accesstoken')
    let decodeaccesToken= this.helper.decodeToken(accesstoken)
    console.log(decodeaccesToken.sub)
    return decodeaccesToken.sub

}

getSrcFromCustomFile(user : User) {
  let uint8Array = new Uint8Array(atob(user.picture.data).split("").map(char => char.charCodeAt(0)));
  let dwn = new Blob([uint8Array])
  return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(dwn));
}
}
