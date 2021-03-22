import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserPageComponent } from './register-user-page.component';

describe('NewUserPageComponent', () => {
  let component: RegisterUserPageComponent;
  let fixture: ComponentFixture<RegisterUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
