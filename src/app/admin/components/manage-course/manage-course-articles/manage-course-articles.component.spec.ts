import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCourseArticlesComponent } from './manage-course-articles.component';

describe('ManageCourseArticlesComponent', () => {
  let component: ManageCourseArticlesComponent;
  let fixture: ComponentFixture<ManageCourseArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCourseArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCourseArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
