import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from 'src/Models/Form/Survey';
import { Observable } from 'rxjs';
import { Questions } from 'src/Models/Form/Questions';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {
  api = environment.baseUrl+'/SURVEY-MANAGEMENT/api/survey/';

  addSurvey(survey:Survey) {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.post<Survey>(this.api,survey,{headers});
  }
  constructor(private http : HttpClient) { }
  getSurveys(): Observable <Survey[]>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<Survey[]>(this.api+'all',{headers});
  }

  getSurveyGeneral(): Observable <Survey[]>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<Survey[]>(this.api+'general',{headers});
  }


  getAnswersCount(): Observable<number>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.get<number>(environment.baseUrl+'/SURVEY-MANAGEMENT/api/answers/count',{headers});
  }

  getSurveyFinances(): Observable <Survey[]>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<Survey[]>(this.api+'finances',{headers})
  }
  getSurveyInformatique(): Observable <Survey[]>{ 
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<Survey[]>(this.api+'informatique',{headers});
  }

  deleteSurvey(survey: Survey): Observable<Survey> {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.delete<Survey>(this.api+survey.id,{headers});
  }


  getSurveyCount(): Observable<number> {  
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;  
    return this.http.get<number>(this.api+'count',{headers});
  };

  getQuestionsBySurveyId(surveyId: number): Observable<Questions[]> {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<Questions[]>(`${this.api}${surveyId}/questions`,{headers});
  }



}
