 import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/Services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardsGuard implements CanActivate {
  constructor( private authservice:AuthService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if(this.authservice.loggedIn()==true){
        resolve(true)
      }else{
      this.router.navigate(['/login'],{queryParams:{saveUrl:state.url}})
      localStorage.removeItem("accesstoken")
       localStorage.removeItem("refreshtoken");


      resolve(false)}
      
    })
  }
  
}
