import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardContentComponent } from './post-card.content.component';

describe('PostCardComponent', () => {
  let component: PostCardContentComponent;
  let fixture: ComponentFixture<PostCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
