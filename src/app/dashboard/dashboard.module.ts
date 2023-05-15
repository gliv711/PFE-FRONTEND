import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ResultsComponent } from './components/results/results.component';
import { AnswersComponent } from './components/answers/answers.component';
import { MatInputModule, MatAutocompleteModule } from '@angular/material';
import { SurveysComponent } from './components/surveys/surveys.component';
import { AddquestionInsideSurveyformComponent } from './components/surveys/addquestion-inside-surveyform/addquestion-inside-surveyform.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    UsersComponent,
    QuestionsComponent,
    SettingsComponent,
    AdminHomeComponent,
    ResultsComponent,
    AnswersComponent,
    SurveysComponent,
    AddquestionInsideSurveyformComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    
  ],
  exports : [DashboardComponent]
})
export class DashboardModule { }
