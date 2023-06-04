import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { timer } from 'rxjs';

import { Survey } from 'src/Models/Form/Survey';
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

  questionsPerStep = 1; // Change this variable to adjust the number of questions per step

  constructor( private route: ActivatedRoute,private SurveyService : SurveyServiceService,private questionsService : QuestionsService,private answerService : AnswerService,private http: HttpClient ,private router: Router) {
   
  }
  readonly DELAY_TIME = 1 * 60 * 1000; // 30 minutes en millisecondes

  

  ngOnInit(): void {
    if ((performance.getEntriesByType('navigation')[1] as any).type === 'reload') {
      this.router.navigate(['/user']); // Redirige vers la page utilisateur
    }
    // const lastRefreshTime = localStorage.getItem('lastRefreshTime');
    // const currentTime = new Date().getTime();
  
    // if (lastRefreshTime) {
    //   const elapsedTime = currentTime - Number(lastRefreshTime);
    //   if (elapsedTime >= this.DELAY_TIME) {
    //     this.router.navigate(['/user']); // Redirige vers la page de connexion
    //   }
    // }
  
    // localStorage.setItem('lastRefreshTime', String(currentTime));
   

    timer(this.DELAY_TIME).subscribe(() => {
      this.router.navigate(['/user']); // Redirige vers la page de connexion
    });
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
  currentStep: number = 1; // Track the current step of the survey

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
  

    

    getCurrentStepQuestions(): any[] {
      const startIndex = (this.currentStep - 1) * this.questionsPerStep;
      const endIndex = Math.min(startIndex + this.questionsPerStep, this.selectedSurvey?.questions?.length || 0);
      return this.selectedSurvey?.questions?.slice(startIndex, endIndex) || [];
    }
  
    get totalSteps(): number {
      const totalQuestions = this.selectedSurvey?.questions?.length || 0;
      return Math.ceil(totalQuestions / this.questionsPerStep);
    }
  
    previousStep(): void {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    }
  
    nextStep(): void {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }




    submitSurvey(): void {
      const selectedAnswers: { questionId: number; answerId: number }[] = [];
      this.getCurrentStepQuestions().forEach((question: any) => {
        const selectedAnswerElement = document.querySelector(`input[name="${question.question_id}"]:checked`) as HTMLInputElement;
        if (selectedAnswerElement) {
          const selectedAnswerId = parseInt(selectedAnswerElement.value, 10);
          const answer = { questionId: question.question_id, answerId: selectedAnswerId };
          selectedAnswers.push(answer);
        }
      });
    
      const resultList = selectedAnswers.map((answer: any) => {
        const question = this.selectedSurvey.questions.find((q: any) => q.question_id === answer.questionId);
        const selectedAnswer = question.answers.find((a: any) => a.answer_id === answer.answerId);
        return {
          question: question.question,
          answer: selectedAnswer.answer
        };
      });
    
      this.selectedSurvey.questions.forEach((question: any) => {
        question.field = this.selectedSurvey.field;
      });
    
      const apiUrl = 'http://localhost:8888/RESULT-MANAGEMENT/api/results/';
    
      const body = {
        email: this.helper.decodeToken(localStorage.getItem('accesstoken') || '')?.sub,
        domain: this.selectedField,
        resultList: resultList
      };

      
    
      this.http.post(apiUrl, body).subscribe(
        (response: any) => {
          console.log('Survey submitted successfully', response);
          console.log(body);
          console.log(response);
        },
        (error: any) => {
          console.error('Error submitting survey', error);
          // Handle error response
        }
      );
    }
    
    
    
    
    
    
    
    
 
    
    helper=new JwtHelperService()

    getemail(){
      let accesstoken:any= localStorage.getItem('accesstoken')
      let decodeaccesToken= this.helper.decodeToken(accesstoken)
      console.log(decodeaccesToken.sub)
      return decodeaccesToken.sub
  
  }



  ngOnDestroy() {
    localStorage.removeItem('lastRefreshTime');
  }
  
  
}
