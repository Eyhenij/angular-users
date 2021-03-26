import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentContainerComponent } from './comment-container.component';

describe('CommentContainerComponent', () => {
  let component: CommentContainerComponent;
  let fixture: ComponentFixture<CommentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
