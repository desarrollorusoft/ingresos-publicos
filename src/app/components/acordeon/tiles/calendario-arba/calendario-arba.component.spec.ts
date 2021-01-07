import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioArbaComponent } from './calendario-arba.component';

describe('CalendarioArbaComponent', () => {
  let component: CalendarioArbaComponent;
  let fixture: ComponentFixture<CalendarioArbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioArbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioArbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
