import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/Models/Survey';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';
import { Field } from 'src/enums/field.enum';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  Surveys : Survey[] = [];
  survey : Survey ={} ;

  fields = Object.values(Field);

    

  constructor(private SurveyService : SurveyServiceService, private http: HttpClient) {
    this.getSurvey();
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  setCurrentSurvey(survey : Survey){
    this.survey=survey;
  }
  
  deleteSurvey(survey : Survey){
    this.SurveyService.deleteSurvey(survey).subscribe({
      next: () => {
        this.getSurvey();
        console.log(survey);
      },
      error: (e) => console.log(e),
      
      complete: () => {
        console.log("Deleted ! ")
      }
    })
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
  
  close(){
    this.survey={};
  }
  

  addSurvey(survey:Survey){
    this.SurveyService.addSurvey(this.survey).subscribe({
      next: () => {
        this.getSurvey();
        this.close();
      },
      error: (e) => console.log(e),
      complete: () => {
        

      }
    })
  }
  

}