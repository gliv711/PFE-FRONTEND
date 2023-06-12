import { Component, OnInit } from '@angular/core';
import { Result } from 'src/Models/Result';
import { User } from 'src/Models/Users/User';
import { ResultService } from 'src/Services/result-service/result.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private resultService: ResultService,private userService : UserServiceService) { }


  result : Result = {}
  results: Result[] = [];

  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  ngOnInit(): void {
    this.getAllResults();
  }

  getAllResults(): void {
    this.resultService.getResults().subscribe({
      next: (response: Result[]) => {
        this.results = response;
        console.log(this.results);

        // Fetch user information for each result
        this.results.forEach((result) => {
          this.getUserByEmail(result.email);
        });
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {}
    });
  }

 user : User ;
  getUserByEmail(email :string){
    this.userService.getUserByEmail(email).subscribe({
      next: (response: User) => {
        this.user = response;
      },
      error: (e) =>  {console.log(e)},
      complete: () => {}
    })
    
  }


close(){
  this.result=null;
}

deleteResult(result){
  this.resultService.deleteResult(result).subscribe({
    next: () => {
      this.getAllResults();
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
}
