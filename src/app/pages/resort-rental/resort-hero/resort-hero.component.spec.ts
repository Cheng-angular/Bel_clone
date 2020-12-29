import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortHeroComponent } from './resort-hero.component';

describe('ResortHeroComponent', () => {
  let component: ResortHeroComponent;
  let fixture: ComponentFixture<ResortHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
