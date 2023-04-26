import { Component, OnInit } from '@angular/core';
import { SurveyServiceService } from 'src/Services/survey-service/survey-service.service';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  user_count : number = 0 ;
  survey_count : number = 0 ;
  results_count : number = 0 ;

  constructor(private UserService : UserServiceService, private SurveyService : SurveyServiceService) { }
  ngOnInit() {
    this.Usercount();
    this.Surveycount();
  }

  Usercount(){
    this.UserService.getUserCount().subscribe((user_count) => {
      this.user_count = user_count;
    });
  }

  Surveycount(){
    this.SurveyService.getSurveyCount().subscribe((survey_count) => {
      this.survey_count = survey_count;
    });
  }



  
}
