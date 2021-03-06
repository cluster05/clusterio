import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPostManageTagsComponent } from './build-post-manage-tags.component';

describe('BuildPostManageTagsComponent', () => {
  let component: BuildPostManageTagsComponent;
  let fixture: ComponentFixture<BuildPostManageTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPostManageTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPostManageTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
