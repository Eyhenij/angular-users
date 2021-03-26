import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardButtonBlockComponent } from './post-card.button-block.component';

describe('PostCardComponent', () => {
  let component: PostCardButtonBlockComponent;
  let fixture: ComponentFixture<PostCardButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardButtonBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
