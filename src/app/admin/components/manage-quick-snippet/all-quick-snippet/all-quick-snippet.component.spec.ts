import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuickSnippetComponent } from './all-quick-snippet.component';

describe('AllQuickSnippetComponent', () => {
  let component: AllQuickSnippetComponent;
  let fixture: ComponentFixture<AllQuickSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuickSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQuickSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
