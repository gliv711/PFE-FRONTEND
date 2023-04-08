import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './INDEX/header/header.component';
import { FooterComponent } from './INDEX/footer/footer.component';
import { HomeComponent } from './INDEX/home/home.component';
import { LoginComponent } from './INDEX/login/login.component';
import { LandingComponent } from './INDEX/landing/landing.component';
import { RegisterComponent } from './INDEX/register/register.component';
import { AdminInterfaceComponent } from './Platform/admin-interface/admin-interface.component';
import { SidebarComponent } from './Platform/sidebar/sidebar.component';
import { MultistepComponent } from './INDEX/multistep/multistep.component';
import { InformationGernalComponent } from './INDEX/information global/information-gernal/information-gernal.component';
import { AllUsersComponent } from './Platform/dashboard/all-users/all-users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllQuestionsComponent } from './Platform/dashboard/all-questions/all-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    SidebarComponent,
    AdminInterfaceComponent,
    MultistepComponent,
    InformationGernalComponent,
    AllUsersComponent,
    AllQuestionsComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
