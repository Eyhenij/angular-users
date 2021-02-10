import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownDataPageComponent } from './unknown-data-page.component';

describe('UnknownDataPageComponent', () => {
  let component: UnknownDataPageComponent;
  let fixture: ComponentFixture<UnknownDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
