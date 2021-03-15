import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewForTagComponent } from './view-for-tag.component';

describe('ViewForTagComponent', () => {
  let component: ViewForTagComponent;
  let fixture: ComponentFixture<ViewForTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewForTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewForTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
