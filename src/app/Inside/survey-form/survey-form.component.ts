import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/Models/Answer';
import { Questions } from 'src/Models/Questions';
import { Survey } from 'src/Models/Survey';
import { AnswerService } from 'src/Services/answer-service/answer.service';
import { QuestionsService } from 'src/Services/question-service/questions.service';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  constructor(private SurveyService : SurveyServiceService,private questionsService : QuestionsService,private answerService : AnswerService) { }

  ngOnInit(): void {
   
    this.getSurveyGeneral();
  
  }
  Surveys : Survey[] = [] ;
  survey : Survey = {};

  getSurveys(){
  
    this.SurveyService.getSurveys().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) =>  {console.log(e)},
      complete: () => {}
    })
  }

    getSurveyGeneral(){
  
      this.SurveyService.getSurveyGeneral().subscribe({
        next: (response: Survey) => {
          this.survey = response;
        },
        error: (e) =>  {console.log(e)},
        complete: () => {}
      })
  
    }
  






  
}
