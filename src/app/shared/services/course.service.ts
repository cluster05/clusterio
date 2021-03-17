import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/constant/interface/course.interface';
import { Article } from 'src/app/constant/interface/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  readCourse(courseId: string): Observable<Course> {
    return this.http.get<Course>(environment.backendBaseURL + '/courses/' + courseId);
  }

  readAllCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(environment.backendBaseURL + '/courses');
  }

  createCourse(payload: Course): Observable<Course> {
    return this.http.post<Course>(environment.backendBaseURL + '/courses', payload);
  }

  deleteCourse(courseId: string): Observable<void> {
    return this.http.delete<void>(environment.backendBaseURL + '/courses/' + courseId);
  }

  uploadCourseImage(image: FormData): Observable<{ imageURL: string }> {
    return this.http.post<{ imageURL: string }>(environment.backendBaseURL + '/courses/image/upload/', image);
  }

  readCourseArticle(courseId: string, articleId: string): Observable<Article> {
    return this.http.get<Article>(environment.backendBaseURL + '/courses/' + courseId + '/article/' + articleId);
  }

  createCourseArticle(courseId: string, articleId: string): Observable<Course> {
    return this.http.post<Course>(environment.backendBaseURL + '/courses/' + courseId + '/article/' + articleId, {});
  }

  deleteCourseArticle(courseId: string, articleId: string): Observable<Course> {
    return this.http.delete<Course>(environment.backendBaseURL + '/courses/' + courseId + '/article/' + articleId);
  }
}