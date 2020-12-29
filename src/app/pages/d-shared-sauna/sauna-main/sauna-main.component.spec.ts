import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaunaMainComponent } from './sauna-main.component';

describe('SaunaMainComponent', () => {
  let component: SaunaMainComponent;
  let fixture: ComponentFixture<SaunaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaunaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaunaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
