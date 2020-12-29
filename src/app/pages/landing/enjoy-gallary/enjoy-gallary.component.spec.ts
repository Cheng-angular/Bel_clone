import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyGallaryComponent } from './enjoy-gallary.component';

describe('EnjoyGallaryComponent', () => {
  let component: EnjoyGallaryComponent;
  let fixture: ComponentFixture<EnjoyGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjoyGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjoyGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
