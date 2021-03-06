import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getItemFromLocalstorage(key: string): string {
    const item = localStorage.getItem(key);
    if (item) {
      return item;
    }
    return '';
  }

  setItemToLocalstorage(key: string, payload: any) {
    localStorage.setItem(key, payload);
  }


  removeItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }



}
