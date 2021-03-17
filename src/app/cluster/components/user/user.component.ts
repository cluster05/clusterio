import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'cluster-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private localStorageservice: LocalstorageService
  ) { }

  ngOnInit(): void {
    if (!this.tokenService.isAuthaticated()) {
      this.router.navigate(['/auth']);
    }
    this.user = this.tokenService.getDecodedToken();

  }

  logout(): void {
    this.localStorageservice.removeItemFromLocalStorage('access_token');
    this.router.navigate(['/']);
  }

}
