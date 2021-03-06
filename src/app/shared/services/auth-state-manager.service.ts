import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateManagerService {

  private authState = new BehaviorSubject(false);
  currentAuthState = this.authState.asObservable();

  constructor() { }

  changeAuthState(authState: boolean) {
    this.authState.next(authState)
  }

}
