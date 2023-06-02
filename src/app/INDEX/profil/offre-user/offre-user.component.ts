import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/Models/Demand';
import { DemandService } from 'src/Services/demand-service/demand.service';

@Component({
  selector: 'app-offre-user',
  templateUrl: './offre-user.component.html',
  styleUrls: ['./offre-user.component.css']
})
export class OffreUserComponent implements OnInit {

  constructor(private demandService : DemandService) { }

  demand : Demand ={}
  demands : Demand[]=[]

  getAllDemands(){
    
      this.demandService.getDemand().subscribe({
        next: (response: Demand[]) => {
          this.demands = response;
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {}
      });
    }
  
  ngOnInit(): void {
    this. getAllDemands();
  }

}
