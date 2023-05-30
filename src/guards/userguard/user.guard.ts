import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from 'src/Services/authuser-service/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private authuser:AuthuserService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if(this.authuser.loggedIn()==true){
        resolve(true)
      }else{
      this.router.navigate(['/login'],{queryParams:{saveUrl:state.url}})
      localStorage.removeItem("accesstoken")
       localStorage.removeItem("refreshtoken");
       localStorage.removeItem("role")


      resolve(false)}
      
    })
  }
  
  
}
