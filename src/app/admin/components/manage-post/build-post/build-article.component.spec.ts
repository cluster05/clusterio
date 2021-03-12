import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildArticleComponent } from './build-article.component';

describe('BuildArticleComponent', () => {
  let component: BuildArticleComponent;
  let fixture: ComponentFixture<BuildArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
