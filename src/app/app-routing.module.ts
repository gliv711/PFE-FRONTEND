

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationGernalComponent } from './INDEX/information global/information-gernal/information-gernal.component';
import { LandingComponent } from './INDEX/landing/landing.component';

import { AccordionComponent } from './Platform/dashboard/addons/accordion/accordion.component';
import { AlertsComponent } from './Platform/dashboard/addons/alerts/alerts.component';
import { BadgesComponent } from './Platform/dashboard/addons/badges/badges.component';
import { BreadcrumbsComponent } from './Platform/dashboard/addons/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './Platform/dashboard/addons/buttons/buttons.component';
import { CardsComponent } from './Platform/dashboard/addons/cards/cards.component';
import { CarouselComponent } from './Platform/dashboard/addons/carousel/carousel.component';
import { ChartsApexchartsComponent } from './Platform/dashboard/addons/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './Platform/dashboard/addons/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './Platform/dashboard/addons/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './Platform/dashboard/addons/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './Platform/dashboard/addons/forms-layouts/forms-layouts.component';
import { PaginationComponent } from './Platform/dashboard/addons/pagination/pagination.component';
import { ProgressComponent } from './Platform/dashboard/addons/progress/progress.component';
import { SpinnersComponent } from './Platform/dashboard/addons/spinners/spinners.component';
import { TablesDataComponent } from './Platform/dashboard/addons/tables-data/tables-data.component';
import { TablesGeneralComponent } from './Platform/dashboard/addons/tables-general/tables-general.component';
import { TabsComponent } from './Platform/dashboard/addons/tabs/tabs.component';
import { PagesContactComponent } from './Platform/dashboard/pages-contact/pages-contact.component';
import { PagesError404Component } from './Platform/dashboard/pages-error404/pages-error404.component';
import { SignupComponent } from './INDEX/signup/signup/signup.component';
import { LoginComponent } from './INDEX/landing/login/login.component';
import { HomeComponent } from './INDEX/landing/Landing-Components/home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsersComponent } from './dashboard/components/users/users.component';
import { QuestionsComponent } from './dashboard/components/questions/questions.component';
import { SettingsComponent } from './dashboard/components/settings/settings.component';
import { AdminHomeComponent } from './dashboard/components/admin-home/admin-home.component';
import { Step1Component } from './INDEX/signup/step1/step1.component';
import { ResultsComponent } from './dashboard/components/results/results.component';
import { ForgetPasswordComponent } from './INDEX/landing/login/forget-password/forget-password.component';
import { AnswersComponent } from './dashboard/components/answers/answers.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

import { ProfilComponent } from './INDEX/profil/profil.component';

import { SurveyFormComponent } from './Inside/survey-form/survey-form.component';
import { SurveysComponent } from './dashboard/components/surveys/surveys.component';
import { PayementFormComponent } from './INDEX/payement-form/payement-form.component';
import { DemandsComponent } from './dashboard/components/demands/demands.component';
import { AuthguardsGuard } from 'src/guards/authguards.guard';
import { NewPasswordFormComponent } from './INDEX/landing/login/new-password-form/new-password-form/new-password-form.component';
import { LoginUserComponent } from './INDEX/landing/login-user/login-user/login-user.component';
import { AcceuilUserComponent } from './INDEX/profil/acceuil-user/acceuil-user.component';
import { SettingsUserComponent } from './INDEX/profil/settings-user/settings-user.component';
import { UserGuard } from 'src/guards/userguard/user.guard';
import { ProfilCompanyComponent } from './profil-company/profil-company/profil-company.component';
import { AcceuilCompanyComponent } from './profil-company/acceuil-company/acceuil-company.component';
import { SettingsCompanyComponent } from './profil-company/settings-company/settings-company.component';
import { DemandeOffreCompanyComponent } from './profil-company/demande-offre-company/demande-offre-company.component';
import { CompanyGuard } from 'src/guards/companyguard/company.guard';
import { NavbarUserComponent } from './INDEX/profil/navbar-user/navbar-user.component';
import { ProfilCompanyModule } from './profil-company/profil-company.module';
import { CompanysComponent } from './dashboard/components/companys/companys.component';
import { AdminsComponent } from './dashboard/components/admins/admins.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'loginuser',component:LoginUserComponent},

  {path:'surveyform/:field',component:SurveyFormComponent},
  {
    path : 'dashboard', component : DashboardComponent, canActivate:[AuthguardsGuard],
    
    children : [
      {
        path : '', component : AdminHomeComponent
      },
      {
        path : 'users', component : UsersComponent
      },
      {
        path : 'questions', component : QuestionsComponent
      },
      {
        path : 'settings', component : SettingsComponent
      },
      {
        path : 'results', component : ResultsComponent
      },
      {
        path : 'answers', component : AnswersComponent
      },
      { 
        path : 'surveys', component : SurveysComponent
      },
      { path : 'demands', component : DemandsComponent},
      {path:"companys",component:CompanysComponent},
      {path :"admins",component:AdminsComponent},

    ]
  },
  {path:"company",component:ProfilCompanyComponent,canActivate:[CompanyGuard],
  children:[

  {path:"",component:AcceuilCompanyComponent},
  {path:"acceuil",component:AcceuilCompanyComponent},
  {path:"setting",component:SettingsCompanyComponent},
  {path:"demande",component:DemandeOffreCompanyComponent},

  ],},
  { path : 'register',component: SignupComponent},
  { path : 'reset-password',component: NewPasswordFormComponent},
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path : 'forget',component:ForgetPasswordComponent},
  { path: 'pages-contact', component: PagesContactComponent },
  { path:'profil',component:ProfilComponent},
  { path: '*', component: PagesError404Component },
  { path : 'information-general',component:InformationGernalComponent},
  { path :'home' , component:HomeComponent},
  { path :'register-c',component:Step1Component},
  { path:'sidebar',component:SidebarComponent},
  { path:'pay',component:PayementFormComponent},
  {
    path: 'user',
    component:ProfilComponent,canActivate:[UserGuard],
  
    children: [
        { path: '', component: AcceuilUserComponent },
        { path: 'setting', component: SettingsUserComponent },
        { path: 'surveyform/:field', component: SurveyFormComponent },
    ]
},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }