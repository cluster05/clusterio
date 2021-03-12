import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPostExtracterComponent } from './build-post-extracter.component';

describe('BuildPostExtracterComponent', () => {
  let component: BuildPostExtracterComponent;
  let fixture: ComponentFixture<BuildPostExtracterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildPostExtracterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPostExtracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
