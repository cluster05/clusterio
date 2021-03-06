import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalstorageService } from '../shared/services/localstorage.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'cluster-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  authState = false;

  constructor(
    private tokenService: TokenService) {
  }

  ngOnInit(): void {

    if (!this.tokenService.isTokenExpired()) {
      this.authState = true;
    }
  }
}
