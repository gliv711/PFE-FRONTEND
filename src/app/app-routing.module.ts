import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './INDEX/landing/landing.component';
import { LoginComponent } from './INDEX/login/login.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
