import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPostPreviewComponent } from './build-post-preview.component';

describe('BuildPostPreviewComponent', () => {
  let component: BuildPostPreviewComponent;
  let fixture: ComponentFixture<BuildPostPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPostPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
