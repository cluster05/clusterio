import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthStateManagerService } from '../shared/services/auth-state-manager.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'cluster-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  authState: boolean = false;

  constructor(
    private authStateManager: AuthStateManagerService,
    private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if (this.tokenService.isTokenExpired()) {
      // remove access_token from local storage
    } else {
      this.authState = true;
      this.authStateManager.currentAuthState.subscribe(authState => this.authState = authState);
    }
  }


}
