import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBarComponent } from './book-bar.component';

describe('BookBarComponent', () => {
  let component: BookBarComponent;
  let fixture: ComponentFixture<BookBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
