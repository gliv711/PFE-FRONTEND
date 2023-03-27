import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './INDEX/header/header.component';
import { FooterComponent } from './INDEX/footer/footer.component';
import { HomeComponent } from './INDEX/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './INDEX/login/login.component';
import { LandingComponent } from './INDEX/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
