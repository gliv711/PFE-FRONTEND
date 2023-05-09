import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/Models/Answer';
import { AnswerService } from 'src/Services/answer-service/answer.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(private answerService : AnswerService,private http: HttpClient ) { }

  ngOnInit(): void {
    this.getAnswers();
  }
/////
  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;

  ////
  answer : Answer={};
  answers : Answer[] = [];
// get answer
  getAnswers(){
    this.answers=[];
    this.answerService.getAllAnswers().subscribe({
      next: (response: Answer[]) => {
        this.answers = response;
      },
      error: (e) =>  {console.log(e);},
      complete: () => {}
    })
  }
  ////////////////

// add answer
  
addAnswer(answer:Answer){
  this.answerService.addAnswer(this.answer).subscribe({
    next: () => {
      this.getAnswers();
      this.close();
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
//////// delete answer

deleteAnswer(answer :Answer){
  this.answerService.deleteAnswer(answer).subscribe({
    next: () => {
      this.getAnswers();
      this.close();
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





////

  setCurrentAnswer(answer :Answer){
    this.answer=answer ;
  }

  close(){
    this.answer={};
  }

}
