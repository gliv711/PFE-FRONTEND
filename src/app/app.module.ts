import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './INDEX/landing/Landing-Components/home/home.component';
import { LandingComponent } from './INDEX/landing/landing.component';
import { RegisterComponent } from './INDEX/register/register.component';
import { MultistepComponent } from './INDEX/register/multistep/multistep.component';
import { InformationGernalComponent } from './INDEX/information global/information-gernal/information-gernal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './INDEX/signup/step1/step1.component';
import { Step2Component } from './INDEX/signup/step2/step2.component';
import { Step3Component } from './INDEX/signup/step3/step3.component';
import { Step4Component } from './INDEX/signup/step4/step4.component';
import {MatStepperModule} from '@angular/material/stepper';
import { TopstepsComponent } from './INDEX/signup/topsteps/topsteps.component';
import { ProgreebarComponent } from './INDEX/signup/progreebar/progreebar.component';

import { FooterComponent } from './INDEX/landing/Landing-Components/footer/footer.component';
import { LoginComponent } from './INDEX/landing/login/login.component';
import { HeaderComponent } from './INDEX/landing/Landing-Components/header/header.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    RegisterComponent,
    MultistepComponent,
    InformationGernalComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    LoginComponent,

    TopstepsComponent,
    ProgreebarComponent,

    FooterComponent,
    
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
