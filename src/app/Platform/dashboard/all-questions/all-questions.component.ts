import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/Models/Survey';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  Surveys : Survey[] = [];
  survey: Survey = { id:0, question: '', field: '' };


  constructor(private SurveyService : SurveyServiceService) {
    this.getSurvey();
   }



  getSurvey(){
    this.SurveyService.getSurvey().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) => console.log(e),
      complete: () => {}
    })

  }
  getSurveyGeneral(){
    this.Surveys=[];
    this.SurveyService.getSurveyGeneral().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) => console.log(e),
      complete: () => {}
    })

  }
  getSurveyFinances(){
    this.Surveys=[];
    this.SurveyService.getSurveyFinances().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) => console.log(e),
      complete: () => {}
    })

  }


  getSurveyInformatique(){
    this.Surveys=[];
    this.SurveyService.getSurveyInformatique().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) => console.log(e),
      complete: () => {}
    })

  }

  ngOnInit(): void {
  }

}
