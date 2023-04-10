import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/Environement/environement';
import { Survey } from 'src/Models/Survey';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {
  api = environment.baseUrl+'SURVEY-MANAGEMENT/api/survey/';

  constructor(private http : HttpClient) { }
  getSurvey(): Observable <Survey[]>{
    return this.http.get<Survey[]>(this.api+'all');
  }
  getSurveyGeneral(): Observable <Survey[]>{
    return this.http.get<Survey[]>(this.api+'general');
  }

  getSurveyFinances(): Observable <Survey[]>{
    return this.http.get<Survey[]>(this.api+'finances');
  }
  getSurveyInformatique(): Observable <Survey[]>{
    return this.http.get<Survey[]>(this.api+'informatique');
  }

}
