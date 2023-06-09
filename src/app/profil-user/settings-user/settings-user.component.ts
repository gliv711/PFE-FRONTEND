import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {

  constructor(private datePipe: DatePipe, private userService : UserServiceService,private sanitizer: DomSanitizer,private UserService:UserServiceService) { }
  user: User = {
    name: '',
    lastName: '',
    email: '',
    phone_number: '',
    address: '',
    region: '',
    university: '',
    domain: '',
    birthDate: new Date,
    startofStudy: new Date(),
    endofStudy: new Date(),
    startofWork: new Date(),
    endofWork: new Date(),
    picture: null
  };
  
  formattedStartofStudy: string;

  formatDate(date: string): string {
    const parts = date.split('-');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return '';
  }
  
  updateStartDate(date: string) {
    const parts = date.split('-');
    if (parts.length === 3) {
      const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      this.user.startofStudy = new Date(formattedDate);
    }
  }
  
  updateEndDate(date: string) {
    const parts = date.split('-');
    if (parts.length === 3) {
      const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      this.user.endofStudy = new Date(formattedDate);
    }
  }
  
  ngOnInit(): void {
    const email: string = this.getemail(); 
    this.getUserByEmail(email);
  }
  
  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (user: User) => {
        this.user = user;
        console.log(user);
        
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  helper = new JwtHelperService();
  
  getemail() {
    let accesstoken: any = localStorage.getItem('accesstoken');
    let decodeaccesToken = this.helper.decodeToken(accesstoken);
    console.log(decodeaccesToken.sub);
    return decodeaccesToken.sub;
  }
  
  getSrcFromCustomFile(user: User) {
    let uint8Array = new Uint8Array(atob(user.picture.data).split("").map(char => char.charCodeAt(0)));
    let dwn = new Blob([uint8Array]);
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(dwn));
  }
  currentFile : File;
  updateMessage: string;
  updateSuccess: boolean;
  onFileSelected(event : any) {

    this.currentFile = event.target.files[0];
    console.log("file selected")
}
addUser(user:User){
  const formData: FormData = new FormData();
  if(user.id!=null)
  formData.append('id', user.id+"");
  formData.append('name', user.name+"");
  formData.append('lastName', user.lastName+"");
  formData.append('email', user.email+"");
  formData.append('appRoles', "model have no app roles");
  formData.append('password', user.password+"");
  formData.append('address',user.address+"");
  formData.append('domain',user.domain+"");
  formData.append('region',user.region+"");
  formData.append('phone_number',user.phone_number+"");
  formData.append('university',user.university+"");
 
  if (user.birthDate instanceof Date) {
    formData.append('birthDate', user.birthDate.toISOString().slice(0, 10));
  }
  if (user.startofStudy instanceof Date) {
    formData.append('startofStudy', user.startofStudy.toISOString().slice(0, 10));
  }
  if (user.endofWork instanceof Date) {
    formData.append('endofWork', user.endofWork.toISOString().slice(0, 10));
  }
  if (user.startofWork instanceof Date) {
    formData.append('startofWork', user.startofWork.toISOString().slice(0, 10));
  }
  if (user.endofStudy instanceof Date) {
    formData.append('endofStudy', user.endofStudy.toISOString().slice(0, 10));
  }
  


  if (this.currentFile != null) {
    formData.append('picture_file',this.currentFile,this.currentFile?.name);
  }
  this.UserService.adduser(formData).subscribe({
   
      
  })
}
  
  
  // updateProfile(user: User) {
  //   this.UserService.updateUser(user).subscribe(
  //     response => {
  //       this.updateMessage = "Profile updated successfully.";
  //       this.updateSuccess = true;
  //       setTimeout(() => {
  //         this.updateMessage = null;
  //         this.updateSuccess = false;
  //       }, 3000)
  //     },
  //     error => {
  //       this.updateMessage = "Failed to update profile.";
  //       this.updateSuccess = false;
  //       setTimeout(() => {
  //         this.updateMessage = null;
  //         this.updateSuccess = false;
  //       }, 3000)
  //     }
  //   );
  // }
}
