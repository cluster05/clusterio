import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPostImageComponent } from './upload-post-image.component';

describe('UploadPostImageComponent', () => {
  let component: UploadPostImageComponent;
  let fixture: ComponentFixture<UploadPostImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPostImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPostImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
