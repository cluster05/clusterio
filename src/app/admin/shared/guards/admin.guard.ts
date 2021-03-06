import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private tokenService: TokenService,
    private router: Router,
    private localStorageSerivce: LocalstorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const decodeToken = this.tokenService.getDecodedToken();
    if (this.tokenService.isAuthaticated()) {
      if (decodeToken.role === 'ADMIN') {
        return true;
      } else {
        alert('Route authorized for admin only')
        this.router.navigate(['/']);
        return false;
      }
    } else {
      if (this.tokenService.token) {
        this.localStorageSerivce.removeItemFromLocalStorage('access_token');
      }
    }
    this.router.navigate(['cryptic/auth']);
    return false;
  }

}
