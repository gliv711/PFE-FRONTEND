import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from 'src/Models/Answer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  api = environment.baseUrl+'8085/api/answers';

  constructor(private http : HttpClient) { }

  getAllAnswers(){
    return this.http.get<Answer[]>(this.api+'/all');

  }
}
