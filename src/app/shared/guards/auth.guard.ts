import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private tokenService: TokenService,
    private router: Router,
    private localStorageService: LocalstorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (this.tokenService.isTokenExpired()) {
    //   this.localStorageService.removeItemFromLocalstorage('access_token');
    //   this.router.navigate(['/cryptic/auth']);
    // }
    return true;
  }

}


