import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/Models/Demand';
import { DemandService } from 'src/Services/demand-service/demand.service';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {


  demands : Demand[] =[];
  demand : Demand = {}
  itemsPerPage = 10;
  currentPage = 1;

  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  constructor(private demandService :DemandService) { }


  ngOnInit(): void {
    this.getDemand();
  }

  
  getDemand(){
    this.demands=[];
    this.demandService.getDemand().subscribe({
      next: (response: Demand[]) => {
        this.demands = response;
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {}
    })
  }

  addDemand(demand:Demand){
    this.demandService.addDemand(demand).subscribe({
      next: () => {
        this.getDemand();
        this.mise_a_jour=true; 
        setTimeout(() => {
          this.mise_a_jour = false;
        }, 3000); 
      },
      error: (e) =>  {console.log(e),this.error=true;},
      complete: () => {
        

      }
    })
  }

  deleteDemand(demand : Demand){
    
    this.demandService.deleteDemand(demand).subscribe({
      next: () => {
        this.getDemand();
      
        
        this.supprimer=true;
        setTimeout(() => {
          this.supprimer = false;
        }, 3000); 
      },
        error: (e) =>  {console.log(e),this.error=true},
      
      complete: () => {
        console.log("Deleted ! ")
      }
    })
  }

  setCurrentDemand(demand : Demand){
    this.demand = demand ;
  }
 close(){
  this.demand={};
 }


 salaryOptions: string[] = ['+500 dt par mois', '+1500 dt par mois', '+2500 dt par mois '];
 contractTypeOptions = ['CDD', 'CDI','Stage'];
 placeOptions: string[] = [
  'Béja',
  'Ben Arous',
  'Bizerte',
  'Gabès',
  'Gafsa',
  'Jendouba',
  'Kairouan',
  'Kasserine',
  'Kébili',
  'Le Kef',
  'Mahdia',
  'Manouba',
  'Médenine',
  'Monastir',
  'Nabeul',
  'Sfax',
  'Sidi Bouzid',
  'Siliana',
  'Sousse',
  'Tataouine',
  'Tozeur',
  'Tunis',
  'Zaghouan'
];
experienceTypeOptions = ["expérience non requise","avoir au moins 1 an d'expérience ", "avoir au moins 3 ans d'expérience ","avoir au moins 5 ans d'expérience ","avoir plus de 5 ans d'expérience"];



}
