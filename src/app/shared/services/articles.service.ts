import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/constant/interface/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  readArticle(articleId: string): Observable<Article> {
    return this.http.get<Article>(environment.backendBaseURL + '/articles/' + articleId);
  }

  readArticleAdmin(articleId: string): Observable<Article> {
    return this.http.get<Article>(environment.backendBaseURL + '/articles/admin/' + articleId);
  }

  readAllArticle(type: string): Observable<Article[]> {
    return this.http.get<Article[]>(environment.backendBaseURL + '/articles?type=' + type);
  }

  readAllArticleAdmin(type: string): Observable<Article[]> {
    return this.http.get<Article[]>(environment.backendBaseURL + '/articles/admin?type=' + type);
  }

  readNewArticle(type: string): Observable<Article[]> {
    return this.http.get<Article[]>(environment.backendBaseURL + '/articles/new-articles?type=' + type);
  }

  createArticle(payload: Article): Observable<Article> {
    return this.http.post<Article>(environment.backendBaseURL + '/articles', payload);
  }

  updateArticle(articleId: string, payload: Article): Observable<Article> {
    return this.http.patch<Article>(environment.backendBaseURL + '/articles/' + articleId, payload);
  }

  deleteArticle(articleId: string): Observable<void> {
    return this.http.delete<void>(environment.backendBaseURL + '/articles/' + articleId);
  }

  uploadArticleImage(image: FormData): Observable<{ imageURL: string }> {
    return this.http.post<{ imageURL: string }>(environment.backendBaseURL + '/articles/image/upload/', image);
  }

  searchArticlesByTagName(tagName: string): Observable<Article[]> {
    return this.http.get<Article[]>(environment.backendBaseURL + '/articles/find/bytag/' + tagName);
  }

  searchArticlesByKeyWord(word: string): Observable<Article[]> {
    return this.http.get<Article[]>(environment.backendBaseURL + '/articles/find/byword/' + word);
  }
}
