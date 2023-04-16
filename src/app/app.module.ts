import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './INDEX/header/header.component';
import { FooterComponent } from './INDEX/footer/footer.component';
import { HomeComponent } from './INDEX/home/home.component';
import { LandingComponent } from './INDEX/landing/landing.component';
import { RegisterComponent } from './INDEX/register/register.component';
import { AdminInterfaceComponent } from './Platform/admin-interface/admin-interface.component';
import { SidebarComponent } from './Platform/sidebar/sidebar.component';
import { MultistepComponent } from './INDEX/multistep/multistep.component';
import { InformationGernalComponent } from './INDEX/information global/information-gernal/information-gernal.component';
import { AllUsersComponent } from './Platform/dashboard/all-users/all-users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllQuestionsComponent } from './Platform/dashboard/all-questions/all-questions.component';
import { Step1Component } from './INDEX/signup/step1/step1.component';
import { Step2Component } from './INDEX/signup/step2/step2.component';
import { Step3Component } from './INDEX/signup/step3/step3.component';
import { Step4Component } from './INDEX/signup/step4/step4.component';
import { AllResultsComponent } from './Platform/dashboard/all-results/all-results.component';
import { LoginComponent } from './INDEX/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    RegisterComponent,
    SidebarComponent,
    AdminInterfaceComponent,
    MultistepComponent,
    InformationGernalComponent,
    AllUsersComponent,
    AllQuestionsComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    AllResultsComponent,
    LoginComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
