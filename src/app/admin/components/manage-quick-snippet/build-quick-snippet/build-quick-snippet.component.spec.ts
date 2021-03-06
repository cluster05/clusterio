import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildQuickSnippetComponent } from './build-quick-snippet.component';

describe('BuildQuickSnippetComponent', () => {
  let component: BuildQuickSnippetComponent;
  let fixture: ComponentFixture<BuildQuickSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildQuickSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildQuickSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
