import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  readAllTag() {
    return this.http.get(environment.backendBaseURL + '/tags');
  }

  createTag(tagId: string, payload: string) { }

  updateTag(tagId: string) { }

  deleteTag(tagId: string) { }
}
