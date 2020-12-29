import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessHeroComponent } from './fitness-hero.component';

describe('FitnessHeroComponent', () => {
  let component: FitnessHeroComponent;
  let fixture: ComponentFixture<FitnessHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
