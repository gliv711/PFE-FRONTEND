import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from 'src/Models/Form/Questions';
import { Result } from 'src/Models/Result';
import { environment } from 'src/environments/environment';
import { QA } from 'src/Models/QA'
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  api = environment.baseUrl+'/RESULT-MANAGEMENT/api/results';

  constructor(private http : HttpClient) { }

  getResults(): Observable <Result[]>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
   return this.http.get<Result[]>(this.api + '/all', { headers });
    }


    getResultsPerDomain(domain : string): Observable <Result[]>{

const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
   return this.http.get<Result[]>(this.api + '/domain/'+domain, { headers });
    }

    getResultCount(): Observable <number>{
      const accessToken:any = localStorage.getItem('accesstoken');
      const refreshToken=localStorage.getItem('refreshtoken')
      var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
     return this.http.get<number>(this.api + '/count', { headers });
      
    }

    deleteResult(result : Result){
      const accessToken:any = localStorage.getItem('accesstoken');
      const refreshToken=localStorage.getItem('refreshtoken')
      var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
      return this.http.delete<Result>(this.api+"/"+result.id,{headers});

    }


    submit(QA : QA){
      console.log(QA)
      return this.http.post<QA>(this.api,QA);
    }

  
}
