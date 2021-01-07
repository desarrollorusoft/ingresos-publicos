import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioTrimestralComponent } from './calendario-trimestral.component';

describe('CalendarioTrimestralComponent', () => {
  let component: CalendarioTrimestralComponent;
  let fixture: ComponentFixture<CalendarioTrimestralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioTrimestralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioTrimestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
