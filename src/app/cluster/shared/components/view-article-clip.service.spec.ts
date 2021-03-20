import { TestBed } from '@angular/core/testing';

import { ViewArticleClipService } from './view-article-clip.service';

describe('ViewArticleClipService', () => {
  let service: ViewArticleClipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewArticleClipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
