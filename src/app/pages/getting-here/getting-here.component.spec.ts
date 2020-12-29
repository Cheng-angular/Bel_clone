import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingHereComponent } from './getting-here.component';

describe('GettingHereComponent', () => {
  let component: GettingHereComponent;
  let fixture: ComponentFixture<GettingHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
