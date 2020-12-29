import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaunaHeroComponent } from './sauna-hero.component';

describe('SaunaHeroComponent', () => {
  let component: SaunaHeroComponent;
  let fixture: ComponentFixture<SaunaHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaunaHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaunaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
