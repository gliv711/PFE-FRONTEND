import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedField: string='';


  constructor( private route: ActivatedRoute,private SurveyService : SurveyServiceService,private questionsService : QuestionsService,private answerService : AnswerService) { }
  

  ngOnInit(): void {

    const field = this.route.snapshot.paramMap.get('field');
    this.selectedField = field ? field : '';

  switch (this.selectedField) {
    case 'informatique':
      this.getRandomSurveyInformatique();
      break;
    case 'finances':
      this.getRandomSurveyFinances();
      break;
    case 'general':
      this.getRandomSurveyGeneral();
      break;
    default:
      console.error('Invalid field selected');
  }


  
  
  }
  Surveys : Survey[] = [] ;
  survey : Survey = {};

  selectedSurvey: Survey = {}; 

  getSurveys(){
  
    this.SurveyService.getSurveys().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) =>  {console.log(e)},
      complete: () => {}
    })
  }

    getRandomSurveyGeneral(){
  
      this.SurveyService.getSurveyGeneral().subscribe(
        (surveys: Survey[]) => {
          this.Surveys = surveys; // Assign all surveys to the surveys array
  
          // Select a random survey from the array
          const randomIndex = Math.floor(Math.random() * this.Surveys.length);
          this.selectedSurvey = this.Surveys[randomIndex];
        },
        (error) => {
          console.error('Failed to fetch surveys:', error);
        }
      );
    }

    getRandomSurveyFinances(){
  
      this.SurveyService.getSurveyFinances().subscribe(
        (surveys: Survey[]) => {
          this.Surveys = surveys; // Assign all surveys to the surveys array
  
          // Select a random survey from the array
          const randomIndex = Math.floor(Math.random() * this.Surveys.length);
          this.selectedSurvey = this.Surveys[randomIndex];
        },
        (error) => {
          console.error('Failed to fetch surveys:', error);
        }
      );
  
    }

    getRandomSurveyInformatique(){
  
      this.SurveyService.getSurveyInformatique().subscribe(
        (surveys: Survey[]) => {
          this.Surveys = surveys; // Assign all surveys to the surveys array
  
          // Select a random survey from the array
          const randomIndex = Math.floor(Math.random() * this.Surveys.length);
          this.selectedSurvey = this.Surveys[randomIndex];
        },
        (error) => {
          console.error('Failed to fetch surveys:', error);
        }
      );
  
    }
  






  
}
