import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioTrimestralVencimientoComponent } from './calendario-trimestral-vencimiento.component';

describe('CalendarioTrimestralVencimientoComponent', () => {
  let component: CalendarioTrimestralVencimientoComponent;
  let fixture: ComponentFixture<CalendarioTrimestralVencimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioTrimestralVencimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioTrimestralVencimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
