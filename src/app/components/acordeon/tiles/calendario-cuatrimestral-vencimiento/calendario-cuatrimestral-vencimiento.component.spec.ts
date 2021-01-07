import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCuatrimestralVencimientoComponent } from './calendario-cuatrimestral-vencimiento.component';

describe('CalendarioTrimestralVencimientoComponent', () => {
  let component: CalendarioCuatrimestralVencimientoComponent;
  let fixture: ComponentFixture<CalendarioCuatrimestralVencimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioCuatrimestralVencimientoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioCuatrimestralVencimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
