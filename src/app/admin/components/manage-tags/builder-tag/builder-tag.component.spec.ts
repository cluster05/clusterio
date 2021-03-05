import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderTagComponent } from './builder-tag.component';

describe('BuilderTagComponent', () => {
  let component: BuilderTagComponent;
  let fixture: ComponentFixture<BuilderTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
