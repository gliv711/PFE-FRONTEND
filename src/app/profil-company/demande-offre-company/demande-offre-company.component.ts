import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/Models/Demand';
import { DemandService } from 'src/Services/demand-service/demand.service';
import { FormsModule } from '@angular/forms';
import { Company } from 'src/Models/Users/Company';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-demande-offre-company',
  templateUrl: './demande-offre-company.component.html',
  styleUrls: ['./demande-offre-company.component.css']
})
export class DemandeOffreCompanyComponent implements OnInit {

  demands : Demand[] =[];
  demand : Demand = {};
  itemsPerPage = 10;
  currentPage = 1;

  company : Company = {};

  chargement =false ;
  mise_a_jour=false ;
  supprimer=false ;
  error = false ;
  constructor(private demandService :DemandService,private userService : UserServiceService) { }


  ngOnInit(): void {
    this.getDemand();
    const email: string = this.getemail(); 
    this.getCompanyByEmail(email).subscribe(
      (company: Company) => {
        console.log(company);
        this.company = company;

      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getCompanyByEmail(email: string): Observable<Company> {
    return this.userService.getCompanyByEmail(email);
  }

  helper = new JwtHelperService();

  getemail(): string {
    const accessToken: any = localStorage.getItem('accesstoken');
    const decodeAccessToken = this.helper.decodeToken(accessToken);
    return decodeAccessToken.sub;
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
    demand.email=this.getemail();
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
