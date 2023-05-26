import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './INDEX/landing/Landing-Components/home/home.component';
import { LandingComponent } from './INDEX/landing/landing.component';

import { InformationGernalComponent } from './INDEX/information global/information-gernal/information-gernal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './INDEX/signup/signup/signup.component';

import { FooterComponent } from './INDEX/landing/Landing-Components/footer/footer.component';
import { LoginComponent } from './INDEX/landing/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';
import { Step1Component } from './INDEX/signup/step1/step1.component';
import { ForgetPasswordComponent } from './INDEX/landing/login/forget-password/forget-password.component';
import { HeaderComponent } from './INDEX/landing/Landing-Components/header/header.component';

import { ProfilComponent } from './INDEX/profil/profil.component';

import { SurveyFormComponent } from './Inside/survey-form/survey-form.component';
import { PayementFormComponent } from './INDEX/payement-form/payement-form.component';
import { NewPasswordFormComponent } from './INDEX/landing/login/new-password-form/new-password-form/new-password-form.component';
import { LoginUserComponent } from './INDEX/landing/login-user/login-user/login-user.component';
import { AcceuilUserComponent } from './INDEX/profil/acceuil-user/acceuil-user.component';
import { NavbarUserComponent } from './INDEX/profil/navbar-user/navbar-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
   
    InformationGernalComponent,
    Step1Component,

   
    LoginComponent,
    ProfilComponent,

    
    SignupComponent,

    FooterComponent,
      ForgetPasswordComponent,
      SurveyFormComponent,
      PayementFormComponent,
      NewPasswordFormComponent,
      LoginUserComponent,
      AcceuilUserComponent,
      NavbarUserComponent,
      
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
