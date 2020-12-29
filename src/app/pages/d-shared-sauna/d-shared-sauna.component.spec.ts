import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSharedSaunaComponent } from './d-shared-sauna.component';

describe('DSharedSaunaComponent', () => {
  let component: DSharedSaunaComponent;
  let fixture: ComponentFixture<DSharedSaunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSharedSaunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSharedSaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
