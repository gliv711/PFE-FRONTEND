import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from 'src/Models/Questions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  api = environment.baseUrl+'8085/api/questions/';

  constructor(private http : HttpClient) { }

  getQuestions(): Observable <Questions[]>{
    return this.http.get<Questions[]>(this.api+'all');
  }

  addQuestions(question:Questions){
      return this.http.post<Questions>(this.api,question);
    }
  
}
