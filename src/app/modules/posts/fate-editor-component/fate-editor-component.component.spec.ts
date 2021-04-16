import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FateEditorComponentComponent } from './fate-editor-component.component';

describe('FateEditorComponentComponent', () => {
  let component: FateEditorComponentComponent;
  let fixture: ComponentFixture<FateEditorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FateEditorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FateEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
