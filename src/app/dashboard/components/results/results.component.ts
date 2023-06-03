import { Component, OnInit } from '@angular/core';
import { Result } from 'src/Models/Result';
import { ResultService } from 'src/Services/result-service/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private resultService: ResultService) { }


  result : Result = {}
  results: Result[] = [];


  ngOnInit(): void {
    this.getAllResults();
  }

  getAllResults(){
    this.resultService.getResults().subscribe({
      next: (response: Result[]) => {
        this.results = response;
        console.log(this.results);
      },
      error: (e) =>  {console.log(e)},
      complete: () => {}
    })
  }

}
