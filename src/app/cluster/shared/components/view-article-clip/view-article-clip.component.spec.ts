import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleClipComponent } from './view-article-clip.component';

describe('ViewArticleClipComponent', () => {
  let component: ViewArticleClipComponent;
  let fixture: ComponentFixture<ViewArticleClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArticleClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArticleClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
