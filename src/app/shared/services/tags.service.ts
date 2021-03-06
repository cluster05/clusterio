import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/constant/interface/tag.inteface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  readAllTag(): Observable<Tag[]> {
    return this.http.get<Tag[]>(environment.backendBaseURL + '/tags');
  }

  createTag(name: string): Observable<Tag> {
    return this.http.post<Tag>(environment.backendBaseURL + '/tags', { name });
  }

  updateTag(tagId: string, name: string) {
    return this.http.patch<Tag>(environment.backendBaseURL + '/tags/' + tagId, { name });
  }

  deleteTag(tagId: string) {
    return this.http.delete<Tag>(environment.backendBaseURL + '/tags/' + tagId);
  }
}
