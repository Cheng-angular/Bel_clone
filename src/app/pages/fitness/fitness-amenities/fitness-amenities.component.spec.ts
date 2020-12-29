import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessAmenitiesComponent } from './fitness-amenities.component';

describe('FitnessAmenitiesComponent', () => {
  let component: FitnessAmenitiesComponent;
  let fixture: ComponentFixture<FitnessAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
