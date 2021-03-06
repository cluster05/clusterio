import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateManagerService {

  private userAuthState = new BehaviorSubject(false);
  currentMessage = this.userAuthState.asObservable();

  constructor() { }

  changeAuthState(authState: boolean) {
    this.userAuthState.next(authState)
  }

}
