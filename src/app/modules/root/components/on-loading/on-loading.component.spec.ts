import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLoadingComponent } from './on-loading.component';

describe('OnLoadingComponent', () => {
  let component: OnLoadingComponent;
  let fixture: ComponentFixture<OnLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
