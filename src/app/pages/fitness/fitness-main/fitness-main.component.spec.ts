import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessMainComponent } from './fitness-main.component';

describe('FitnessMainComponent', () => {
  let component: FitnessMainComponent;
  let fixture: ComponentFixture<FitnessMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
