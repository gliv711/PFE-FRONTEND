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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './INDEX/signup/signup.component';

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
    
    SignupComponent,
    
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
