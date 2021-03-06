import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'cluster-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit, OnDestroy {

  username = 'user';
  subscription: Subscription = new Subscription()


  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    const decodedToken = this.tokenService.getDecodedToken();
    this.username = decodedToken.username;

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
