import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTagResultComponent } from './view-tag-result.component';

describe('ViewTagResultComponent', () => {
  let component: ViewTagResultComponent;
  let fixture: ComponentFixture<ViewTagResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTagResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTagResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
