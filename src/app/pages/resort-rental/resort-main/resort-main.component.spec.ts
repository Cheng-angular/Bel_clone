import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortMainComponent } from './resort-main.component';

describe('ResortMainComponent', () => {
  let component: ResortMainComponent;
  let fixture: ComponentFixture<ResortMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
