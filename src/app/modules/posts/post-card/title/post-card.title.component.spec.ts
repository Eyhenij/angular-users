import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardTitleComponent } from './post-card.title.component';

describe('PostCardComponent', () => {
  let component: PostCardTitleComponent;
  let fixture: ComponentFixture<PostCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
