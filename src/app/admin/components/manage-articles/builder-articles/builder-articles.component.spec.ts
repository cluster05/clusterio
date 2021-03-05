import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderArticlesComponent } from './builder-articles.component';

describe('BuilderArticlesComponent', () => {
  let component: BuilderArticlesComponent;
  let fixture: ComponentFixture<BuilderArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
