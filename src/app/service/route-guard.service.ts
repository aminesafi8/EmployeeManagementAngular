import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Route Guard Activated!');
    if (this.authenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }


}
