import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { timer } from 'rxjs';
import { Answer } from 'src/Models/Form/Answer';
import { Questions } from 'src/Models/Form/Questions';

import { Survey } from 'src/Models/Form/Survey';
import { AnswerService } from 'src/Services/answer-service/answer.service';
import { QuestionsService } from 'src/Services/question-service/questions.service';
import { ResultService } from 'src/Services/result-service/result.service';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';
import { QA } from 'src/Models/QA'
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  selectedField: string='';

  questionsPerStep = 1; // Change this variable to adjust the number of questions per step

  constructor(private resultService : ResultService, private route: ActivatedRoute,private SurveyService : SurveyServiceService,private questionsService : QuestionsService,private answerService : AnswerService,private http: HttpClient ,private router: Router) {
   
  }
  readonly DELAY_TIME = 1 * 60 * 1000; // 30 minutes en millisecondes

  isQuizCompleted : boolean = false; // wfaa


  ngOnInit(): void {
    this.startTimer();
    // const lastRefreshTime = localStorage.getItem('lastRefreshTime');
    // const currentTime = new Date().getTime();
  
    // if (lastRefreshTime) {
    //   const elapsedTime = currentTime - Number(lastRefreshTime);
    //   if (elapsedTime >= this.DELAY_TIME) {
    //     this.router.navigate(['/user']); // Redirige vers la page de connexion
    //   }
    // }
  
    // localStorage.setItem('lastRefreshTime', String(currentTime));
   

  
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

  const surveyCompleted = localStorage.getItem('surveyCompleted');
  if (surveyCompleted) {
    // Survey has been completed, hide the survey
    this.selectedSurvey = null;
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
    ans : number ;
    
    nextStep(question_id , answer_id): void {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }

      // console.log(question_id);
      // console.log(answer_id);
      // console.log(this.ans);
      this.selectedAnswers.push(this.ans)
      this.selectedQuestions.push(question_id)
      console.log(this.selectedAnswers)
    }


    selectedAnswers : number[] = []
    selectedQuestions : Questions[]=[];


    // submitSurvey(question): void {
    //   this.selectedAnswers.push({"question": question.question, "answerId":this.ans})
    //   console.log(this.selectedAnswers)

    //   this.getCurrentStepQuestions().forEach((question: any) => {
    //     const selectedAnswerElement = document.querySelector(`input[name="${question.question_id}"]:checked`) as HTMLInputElement;
    //     if (selectedAnswerElement) {
    //       const selectedAnswerId = parseInt(selectedAnswerElement.value, 10);
    //       const answer = { question: question.question_id, answerId: selectedAnswerId };
    //       this.selectedAnswers.push(answer);
    //     }
    //   });
    
    //   const resultList = this.selectedAnswers.map((answer: any) => {
    //     const question = this.selectedSurvey.questions.find((q: any) => q.question_id === answer.questionId);
    //     const selectedAnswer = question.answers.find((a: any) => a.answer_id === answer.answerId);
    //     return {
    //       question: question.question,
    //       answer: selectedAnswer.answer
    //     };
    //   });
    
    //   const apiUrl = 'http://localhost:8888/RESULT-MANAGEMENT/api/results/';
    
    //   const body = {
    //     email: this.getemail(), // Use the getemail() method to get the email
    //     domain: this.selectedField,
    //     resultList: resultList
    //   };
    
    //   this.http.post(apiUrl, body).subscribe(
    //     (response: any) => {
    //       console.log('Survey submitted successfully', response);
    //       console.log(body);
    //       console.log(response);
    //       localStorage.setItem('surveyCompleted', 'true');

    //     },
    //     (error: any) => {
    //       console.error('Error submitting survey', error);
    //       // Handle error response
    //     }
    //   );
    // }

  
    submitSurvey(question: any): void {
      let QA:QA={}  ;

     this.selectedAnswers.push(this.ans)
     this.selectedQuestions.push(question.question)
     QA.qs=this.selectedQuestions;
     QA.answers=this.selectedAnswers;

      console.info(QA)
      this.resultService.submit(QA).subscribe(
        // (surveys: Survey[]) => {
        //   this.Surveys = surveys; // Assign all surveys to the surveys array
  
        //   // Select a random survey from the array
        //   const randomIndex = Math.floor(Math.random() * this.Surveys.length);
        //   this.selectedSurvey = this.Surveys[randomIndex];
        // },
        // (error) => {
        //   console.error('Failed to fetch surveys:', error);
        // }
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
  

  // Declare the timer variable in your component
// Declare the timer variable in your component
timer: number = 60;
timerExpired: boolean = false;

// Add the timer logic
startTimer() {
  const interval = setInterval(() => {
    this.timer--;
    if (this.timer === 0) {
      clearInterval(interval);
      this.timerExpired = true;
    }
  }, 1000); // Update the timer every second
}
  
}
