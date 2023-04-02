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
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
