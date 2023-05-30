import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Demand[]>(this.api+'all');
  }

  addDemand(demand:Demand) {
    return this.http.post<Demand>(this.api,demand);
  }

  deleteDemand(demand: Demand): Observable<Demand> {
    return this.http.delete<Demand>(this.api+demand.id);
  }

  getDemandCount(): Observable<number> {    
    return this.http.get<number>(this.api+'count');
  };

  


}
