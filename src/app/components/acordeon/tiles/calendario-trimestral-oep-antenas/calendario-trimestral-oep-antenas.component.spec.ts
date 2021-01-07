import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioTrimestralOepAntenasComponent } from './calendario-trimestral-oep-antenas.component';

describe('CalendarioTrimestralOepAntenasComponent', () => {
  let component: CalendarioTrimestralOepAntenasComponent;
  let fixture: ComponentFixture<CalendarioTrimestralOepAntenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioTrimestralOepAntenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioTrimestralOepAntenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
