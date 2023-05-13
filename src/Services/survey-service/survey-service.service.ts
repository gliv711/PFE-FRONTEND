import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/Models/Survey';
import { Observable } from 'rxjs';
import { Questions } from 'src/Models/Questions';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {
  api = environment.baseUrl+'/SURVEY-MANAGEMENT/api/survey/';

  addSurvey(survey:Survey) {
    return this.http.post<Survey>(this.api,survey);
  }
  constructor(private http : HttpClient) { }
  getSurveys(): Observable <Survey[]>{
    return this.http.get<Survey[]>(this.api+'all');
  }

  getSurveyGeneral(): Observable <Survey>{
    return this.http.get<Survey>(this.api+'general');
  }

  getSurveyFinances(): Observable <Survey[]>{
    return this.http.get<Survey[]>(this.api+'finances');
  }
  getSurveyInformatique(): Observable <Survey[]>{ 
    return this.http.get<Survey[]>(this.api+'informatique');
  }

  deleteSurvey(survey: Survey): Observable<Survey> {
    return this.http.delete<Survey>(this.api+survey.id);
  }


  getSurveyCount(): Observable<number> {    
    return this.http.get<number>(this.api+'count');
  };

  getQuestionsBySurveyId(surveyId: number): Observable<Questions[]> {
    return this.http.get<Questions[]>(`${this.api}${surveyId}/questions`);
  }



}
