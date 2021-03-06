import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(environment.backendBaseURL + '/auth/login', { email, password });
  }

  register(username: string, email: string, password: string) {
    return this.http.post(environment.backendBaseURL + '/auth/register', { username, email, password });
  }

  changePassword(email: string, password: string, newPassword: string) {
    return this.http.post(environment.backendBaseURL + '/auth/change-passoword', { email, password, newPassword });
  }

  userCount() {
    return this.http.get(environment.backendBaseURL + '/auth/user/count');
  }
}
