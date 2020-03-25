import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from './my-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {
  constructor(private service : MyServiceService, private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedIn = this.service.loggedUser;
      // console.log(loggedIn);
      if (loggedIn == null) {
        this.router.navigateByUrl('/register')
        return false;
      }
        return true

      
    }

}
