import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private helper = new JwtHelperService();

  constructor(private localStorageService: LocalstorageService) { }

  get token() {
    return this.localStorageService.getItemFromLocalstorage('access_token');
  }

  set token(payload) {
    this.localStorageService.setItemToLocalstorage('access_token', payload);
  }

  getDecodedToken() {
    return this.helper.decodeToken(this.token);
  }

  isAuthaticated() {
    if (this.token && !this.helper.isTokenExpired(this.token)) {
      return true;
    }
    return false;
  }
}
