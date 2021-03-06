import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  read(articleId: string) {
    return this.http.get(environment.backendBaseURL + '/articles/' + articleId);
  }

  readAllArticle() {
    return this.http.get(environment.backendBaseURL + '/articles');
  }

  createArticle(payload: any) {
    return this.http.post(environment.backendBaseURL + '/articles', payload);
  }

  updateArticle(articleId: string, payload: any) {
    return this.http.patch(environment.backendBaseURL + '/articles/' + articleId, payload);
  }

  deleteArticle(articleId: string) {
    return this.http.delete(environment.backendBaseURL + '/articles/' + articleId);
  }
}
