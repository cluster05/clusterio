import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuickSnippetComponent } from './manage-quick-snippet.component';

describe('ManageQuickSnippetComponent', () => {
  let component: ManageQuickSnippetComponent;
  let fixture: ComponentFixture<ManageQuickSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageQuickSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuickSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
