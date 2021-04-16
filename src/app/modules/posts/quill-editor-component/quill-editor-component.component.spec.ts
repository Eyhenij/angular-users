import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillEditorComponentComponent } from './quill-editor-component.component';

describe('TextEditorComponentComponent', () => {
  let component: QuillEditorComponentComponent;
  let fixture: ComponentFixture<QuillEditorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuillEditorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
