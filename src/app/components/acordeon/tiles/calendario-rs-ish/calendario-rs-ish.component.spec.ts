import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioRsIshComponent } from './calendario-rs-ish.component';

describe('CalendarioRsIshComponent', () => {
  let component: CalendarioRsIshComponent;
  let fixture: ComponentFixture<CalendarioRsIshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioRsIshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioRsIshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
