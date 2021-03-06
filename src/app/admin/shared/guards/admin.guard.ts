import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/shared/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private tokenService: TokenService,
    private router: Router
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
    }
    this.router.navigate(['cryptic/auth']);
    return false;
  }

}
