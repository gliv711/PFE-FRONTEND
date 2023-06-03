import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DemandService } from 'src/Services/demand-service/demand.service';
import { QuestionsService } from 'src/Services/question-service/questions.service';
import { ResultService } from 'src/Services/result-service/result.service';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  user_count : number = 0 ;
  company_count : number = 0 ;
  admin_count : number = 0 ;
  results_count : number = 0 ;
  enquete_count : number = 0 ;
  question_count : number = 0 ;
  answers_count : number = 0 ;
  demand_count : number = 0 ;
  result_count : number = 0 ;
  admin_name: string = '';


  apicompany=environment.baseUrl+'/USER-MANAGEMENT/api/company';
  apiadmin=environment.baseUrl+'/USER-MANAGEMENT/api/admin';
  apisurvey=environment.baseUrl+'/SURVEY-MANAGEMENT/api/answers';
  
  constructor(private resultService : ResultService,private demandService : DemandService,private http: HttpClient,private UserService : UserServiceService, private SurveyService : SurveyServiceService,private  questionService : QuestionsService) { }
  ngOnInit() {
    this.Usercount();
    this.Surveycount();
    this.Questioncount();
    this.Admincount();
    this.CompanyCount();
    this.AnswersCount();
    this.DemandCount();
    this.ResultCount();
    this.getAdminName();
  }

  ResultCount(){
    this.resultService.getResultCount().subscribe((demand_count) => {
      this.demand_count = demand_count;
    });
  }

  DemandCount(){
    this.demandService.getDemandCount().subscribe((demand_count) => {
      this.demand_count = demand_count;
    });
  }
  helper=new JwtHelperService()

  getemail(){
    let accesstoken:any= localStorage.getItem('accesstoken')
    let decodeaccesToken= this.helper.decodeToken(accesstoken)
    console.log(decodeaccesToken.sub)
    return decodeaccesToken.sub

}
getAdminName() {
  const email = this.getemail();
  this.UserService.getAdminbyEmail(email).subscribe((admin) => {
    this.admin_name = admin.email;
  });
}
  


  Usercount(){
    this.UserService.getUserCount().subscribe((user_count) => {
      this.user_count = user_count;
    });
  }
  Admincount(){
  
    this.UserService.getAdminCount().subscribe((admin_count) => {
      this.admin_count = admin_count;
    }); 
  }

  CompanyCount(){
    this.UserService.getCompanyCount().subscribe((company_count) => {
      this.company_count = company_count;
    });
  }
  AnswersCount(){
 this.SurveyService.getAnswersCount().subscribe((answers_count) => {
  this.answers_count = answers_count;
});

  }

  Surveycount(){
    this.SurveyService.getSurveyCount().subscribe((enquete_count) => {
      this.enquete_count = enquete_count;
    });
  }

  Questioncount(){
    this.questionService.getQuestionCount().subscribe((question_count) =>{
      this.question_count=question_count;
    })
  }



  
}
