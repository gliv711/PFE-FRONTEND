import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-acceuil-user',
  templateUrl: './acceuil-user.component.html',
  styleUrls: ['./acceuil-user.component.css']
})
export class AcceuilUserComponent implements OnInit {

  constructor(private userService:UserServiceService,private sanitizer: DomSanitizer) { }

  user: User = {
    name: '',
    lastName: '',
    email: '',
    phone_number: '',
    address: '',
    region: '',
    university: '',
    domain: '',
    NameofCompany:''
  }; 
  ngOnInit(): void {
    const email: string = this.getemail(); // Assuming 'getemail()' returns a string
    this.getUserByEmail(email); // Passing the 'email' variable instead of 'this.email'
    
  }
  

  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (user: User) => {
        this.user = user;
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
getSrcFromCustomFile(user: User) {
  let uint8Array = new Uint8Array(atob(user.picture.data).split("").map(char => char.charCodeAt(0)));
  let dwn = new Blob([uint8Array]);
  return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(dwn));
}


}
