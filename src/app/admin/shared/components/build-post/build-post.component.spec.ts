import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPostComponent } from './build-post.component';

describe('BuildPostComponent', () => {
  let component: BuildPostComponent;
  let fixture: ComponentFixture<BuildPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
