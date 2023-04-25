import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    UsersComponent,
    QuestionsComponent,
    SettingsComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports : [DashboardComponent]
})
export class DashboardModule { }
