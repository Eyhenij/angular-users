import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyEditorComponentComponent } from './tiny-editor-component.component';

describe('TinyEditorComponentComponent', () => {
  let component: TinyEditorComponentComponent;
  let fixture: ComponentFixture<TinyEditorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyEditorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
