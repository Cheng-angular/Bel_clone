import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortRentalComponent } from './resort-rental.component';

describe('ResortRentalComponent', () => {
  let component: ResortRentalComponent;
  let fixture: ComponentFixture<ResortRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
