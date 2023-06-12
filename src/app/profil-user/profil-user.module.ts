import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { OffreUserComponent } from './offre-user/offre-user.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    ProfilComponent,
    AcceuilUserComponent,
    NavbarUserComponent,
    OffreUserComponent,
    SettingsUserComponent,
    
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,

  ],
  exports : [ProfilComponent]
})
export class ProfilUserModule { }
