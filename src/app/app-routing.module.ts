import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './INDEX/landing/landing.component';
import { LoginComponent } from './INDEX/login/login.component';
import { RegisterComponent } from './INDEX/register/register.component';
import { AdminInterfaceComponent } from './Platform/admin-interface/admin-interface.component';
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
import { IconsBootstrapComponent } from './Platform/dashboard/addons/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './Platform/dashboard/addons/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './Platform/dashboard/addons/icons-remix/icons-remix.component';
import { ListGroupComponent } from './Platform/dashboard/addons/list-group/list-group.component';
import { ModalComponent } from './Platform/dashboard/addons/modal/modal.component';
import { PaginationComponent } from './Platform/dashboard/addons/pagination/pagination.component';
import { ProgressComponent } from './Platform/dashboard/addons/progress/progress.component';
import { SpinnersComponent } from './Platform/dashboard/addons/spinners/spinners.component';
import { TablesDataComponent } from './Platform/dashboard/addons/tables-data/tables-data.component';
import { TablesGeneralComponent } from './Platform/dashboard/addons/tables-general/tables-general.component';
import { TabsComponent } from './Platform/dashboard/addons/tabs/tabs.component';
import { TooltipsComponent } from './Platform/dashboard/addons/tooltips/tooltips.component';
import { DashboardComponent } from './Platform/dashboard/dashboard/dashboard.component';
import { PagesBlankComponent } from './Platform/dashboard/pages-blank/pages-blank.component';
import { PagesContactComponent } from './Platform/dashboard/pages-contact/pages-contact.component';
import { PagesError404Component } from './Platform/dashboard/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './Platform/dashboard/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './Platform/dashboard/pages-login/pages-login.component';
import { PagesRegisterComponent } from './Platform/dashboard/pages-register/pages-register.component';
import { UsersProfileComponent } from './Platform/dashboard/users-profile/users-profile.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminInterfaceComponent },
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
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: '**', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
