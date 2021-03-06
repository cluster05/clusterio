import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuickSnippetComponent } from './single-quick-snippet.component';

describe('SingleQuickSnippetComponent', () => {
  let component: SingleQuickSnippetComponent;
  let fixture: ComponentFixture<SingleQuickSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQuickSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuickSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
