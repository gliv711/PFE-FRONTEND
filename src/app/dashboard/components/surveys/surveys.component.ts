import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/Models/Answer';
import { Questions } from 'src/Models/Questions';
import { Survey } from 'src/Models/Survey';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  constructor(private surveyService : SurveyServiceService) { }

  ngOnInit(): void {
    this.getSurveys();
  }

  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;

  surveys : Survey[] = [] ;
  itemsPerPage = 10;
  currentPage = 1;

  survey : Survey = {} ;
  
  questions : Questions[] =[];

  question : Questions ={};
  status: boolean[] = [];


  setCurrentSurvey(survey :Survey){
    this.survey=survey;
  }

  getSurveys(){
  
      this.surveyService.getSurveys().subscribe({
        next: (response: Survey[]) => {
          this.surveys = response;
        },
        error: (e) =>  {console.log(e),this.error=true;},
        complete: () => {}
      })
    
  }




  deleteSurvey(survey : Survey){
    this.surveyService.deleteSurvey(survey).subscribe({
      next: () => {
        this.getSurveys();
        console.log(survey);
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


  addSurvey(survey:Survey){
    this.surveyService.addSurvey(survey).subscribe({
      next: () => {
        this.getSurveys();
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




close(){
  this.survey={};
}






moreQuestion(): void {
  const newQuestion: Questions = {
    question: '',
    answers: []
  };
  if (!this.survey.questions) {
    this.survey.questions = [];
  }
  this.survey.questions.push(newQuestion);
}

removeQuestion(index: number) {
  if (this.survey.questions) {
    this.survey.questions.splice(index, 1);
  }
}




addAnswer(question: Questions) {
  if (!question.answers) {
    question.answers = [];
  }
  const newAnswer: Answer = {
    answer: '',
    status: false
  };
  question.answers.push(newAnswer);
}

removeAnswer(question: Questions, index: number) {
  if (question.answers) {
    question.answers.splice(index, 1);
  }
}
}