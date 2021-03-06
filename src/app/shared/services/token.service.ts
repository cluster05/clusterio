import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private localStorageService: LocalstorageService) { }

  get token() {
    return this.localStorageService.getItemFromLocalstorage('access_token');
  }

  set token(payload) {
    this.localStorageService.setItemToLocalstorage('access_token', payload);
  }

}
