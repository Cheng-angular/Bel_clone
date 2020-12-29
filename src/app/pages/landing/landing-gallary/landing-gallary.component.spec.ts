import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGallaryComponent } from './landing-gallary.component';

describe('LandingGallaryComponent', () => {
  let component: LandingGallaryComponent;
  let fixture: ComponentFixture<LandingGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
