import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/Models/FileHandle';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: User[]=[];
  mehdi="bhim ki zebi"

  constructor(private sanitizer: DomSanitizer ,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getoneUser(1).subscribe(data=>{
      
      console.log(data);
      console.log(this.user);
    })
  }
  imagesUploads: FileHandle[] = [];
  onFileSelected(event: any): void {
    this.imagesUploads=[];

    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const url = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
          this.imagesUploads.push({ file, url });
        };
        reader.readAsDataURL(file);
      }
    }
  }

}
