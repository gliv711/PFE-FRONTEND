import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from 'src/Models/Questions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  api = environment.baseUrl+'/SURVEY-MANAGEMENT/api/questions/';

  constructor(private http : HttpClient) { }

  getQuestions(): Observable <Questions[]>{
    return this.http.get<Questions[]>(this.api+'all');
  }

  addQuestions(question:Questions){
    return this.http.post<Questions>(this.api,question);
  }

  getQuestionCount(){
    return this.http.get<number>(this.api+'count');
  }

  deleteQuestion(question:Questions){
    return this.http.delete<Questions>(this.api+question.question_id);
  }

  
}
