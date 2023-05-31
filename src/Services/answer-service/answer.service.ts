import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from 'src/Models/Form/Answer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  api = environment.baseUrl+'/SURVEY-MANAGEMENT/api/answers/';

  constructor(private http : HttpClient) { }

  getAllAnswers(){
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<Answer[]>(this.api+'all',{headers});
  }

  addAnswer(answer:Answer){
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.post<Answer>(this.api,answer,{headers});
  }

  deleteAnswer(answer :Answer){
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.delete<Answer>(this.api+answer.answer_id,{headers})
  }
}
