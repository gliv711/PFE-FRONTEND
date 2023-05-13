import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/Models/Answer';
import { Questions } from 'src/Models/Questions';
import { Survey } from 'src/Models/Survey';
import { AnswerService } from 'src/Services/answer-service/answer.service';
import { QuestionsService } from 'src/Services/question-service/questions.service';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';
import { Field } from 'src/enums/field.enum';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  constructor(private SurveyService : SurveyServiceService, private http: HttpClient, private questionsService : QuestionsService,private answerService : AnswerService) {
    
    
   }
  ngOnInit(): void {
    this.getSurvey();
    this.getQuestions();
  }


  

  status: boolean[] = [];
  selectedOption: string = '';

  Surveys : Survey[] = [];
  surveys : Survey ={} ;

  questions : Questions[]=[] ;
  question : Questions= {};

  answer : Answer={};
  Answers : Answer[] = [];


  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;

  fields = Object.values(Field);
  itemsPerPage = 10;
  currentPage = 1;


  selectedSurvey: Survey | null | undefined;
  filteredQuestions: Questions[] = [];
  selectedSurveyId: number | null = null; // Add selectedSurveyId property

  getQuestionsBySurvey(): void {
    if (this.selectedSurveyId) {
     
        this.SurveyService.getQuestionsBySurveyId(this.selectedSurveyId).subscribe({
           next: (questions: Questions[]) => {
             this.filteredQuestions = questions;
           },
           error: (error) => {
             console.log(error);
           }
         });
     
     
     
    } else {
      
      this.filteredQuestions = this.questions; // Reset the filtered questions if no survey is selected
    }
  }


  

  
  
  
  
  
  
  
  


  removeAnswer(index: number): void {
    if (this.question && this.question.answers && this.question.answers[index]) {
      this.question.answers.splice(index, 1);
      this.status.splice(index, 1);
    }
  }
    
  addAnswer(): void {
    if (this.question && this.question.answers) {
      this.question.answers.push({ answer: '', status: false });
    } else {
      // Initialize the question object and answers array
      this.question = { answers: [{ answer: '', status: false }] };
    }
  }

  submitAnswers(){

  }



  getAnswers(){
    this.Answers=[];
    this.answerService.getAllAnswers().subscribe({
      next: (response: Answer[]) => {
        this.Answers = response;
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }

  

  setCurrentQuestion(question :Questions){
    this.question=question;
    this.getAnswers();
    
  }

  




  getQuestions(){
    this.questionsService.getQuestions().subscribe({
      next: (response: Questions[]) => {
        this.questions = response;
        console.log(this.questions)
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }


  addQuestions(question:Questions){
    this.questionsService.addQuestions(question).subscribe({
      next: () => {
        this.getQuestions();
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





  
  deleteQuestion(question : Questions){
    
    this.questionsService.deleteQuestion(question).subscribe({
      next: () => {
        this.getSurvey();
        this.getQuestionsBySurvey();
        this.getQuestions();
        console.log(question);
        this.supprimer=true;
        setTimeout(() => {
          this.supprimer = false;
        }, 3000); 
      },
        error: (e) =>  {console.log(e),this.error=true;console.log(question.question_id)},
      
      complete: () => {
        console.log("Deleted ! ")
      }
    })
  }

  



  getSurvey(){
    this.SurveyService.getSurveys().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })

  }
 
  getSurveyFinances(){
    this.Surveys=[];
    this.SurveyService.getSurveyFinances().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })

  }


  getSurveyInformatique(){
    this.Surveys=[];
    this.SurveyService.getSurveyInformatique().subscribe({
      next: (response: Survey[]) => {
        this.Surveys = response;
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })

  }
  
  close(){
  }
  

  

  ///

  
  

}
