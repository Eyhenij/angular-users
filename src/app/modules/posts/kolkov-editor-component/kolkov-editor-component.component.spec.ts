import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkovEditorComponentComponent } from './kolkov-editor-component.component';

describe('GeargroupEditorComponentComponent', () => {
  let component: KolkovEditorComponentComponent;
  let fixture: ComponentFixture<KolkovEditorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolkovEditorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkovEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
