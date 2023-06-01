import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from 'src/Models/Demand';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandService {
  api = environment.baseUrl+'/OFFER-MANAGEMENT/api/demands/';

  constructor(private http : HttpClient) { }


  getDemand(): Observable <Demand[]>{
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.get<Demand[]>(this.api+'all',{headers});
  }

  addDemand(demand:Demand) {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.post<Demand>(this.api,demand,{headers});
  }

  deleteDemand(demand: Demand): Observable<Demand> {
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;
    return this.http.delete<Demand>(this.api+demand.id,{headers});
  }

  getDemandCount(): Observable<number> { 
    const accessToken:any = localStorage.getItem('accesstoken');
    const refreshToken=localStorage.getItem('refreshtoken')
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken) ;   
    return this.http.get<number>(this.api+'count',{headers});
  };

  getDemandByEmail(email:string):Observable<Demand[]>{
    return this.http.delete<Demand[]>(this.api+email);


  }

  


}
