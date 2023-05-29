import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilCompanyComponent } from './profil-company/profil-company.component';
import { NavbarCompanyComponent } from './navbar-company/navbar-company.component';
import { AcceuilCompanyComponent } from './acceuil-company/acceuil-company.component';
import { SettingsCompanyComponent } from './settings-company/settings-company.component';
import { DemandeOffreCompanyComponent } from './demande-offre-company/demande-offre-company.component';

import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ProfilCompanyComponent,
    NavbarCompanyComponent,
    AcceuilCompanyComponent,
    SettingsCompanyComponent,
    DemandeOffreCompanyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,

  ],
  exports : [ProfilCompanyComponent]

})
export class ProfilCompanyModule { }
