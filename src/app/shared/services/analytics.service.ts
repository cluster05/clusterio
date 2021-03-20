import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Analytics } from 'src/app/constant/interface/analytics.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  getAnalyticsCount(): Observable<Analytics> {
    return this.http.get<Analytics>(environment.backendBaseURL + '/analytics/count');
  }
}
