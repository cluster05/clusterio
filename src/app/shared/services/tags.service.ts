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

  createTag(tagId: string, payload: string) { }

  updateTag(tagId: string) { }

  deleteTag(tagId: string) { }
}
