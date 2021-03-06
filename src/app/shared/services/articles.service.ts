import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/constant/interface/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  read(articleId: string) {
    return this.http.get<Article[]>(environment.backendBaseURL + '/articles/' + articleId);
  }

  readAllArticle() {
    return this.http.get<Article>(environment.backendBaseURL + '/articles');
  }

  createArticle(payload: Article) {
    return this.http.post<Article>(environment.backendBaseURL + '/articles', payload);
  }

  updateArticle(articleId: string, payload: Article) {
    return this.http.patch<Article>(environment.backendBaseURL + '/articles/' + articleId, payload);
  }

  deleteArticle(articleId: string) {
    return this.http.delete<Article>(environment.backendBaseURL + '/articles/' + articleId);
  }
}
