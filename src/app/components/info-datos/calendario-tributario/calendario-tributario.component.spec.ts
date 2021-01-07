import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioTributarioComponent } from './calendario-tributario.component';

describe('CalendarioTributarioComponent', () => {
  let component: CalendarioTributarioComponent;
  let fixture: ComponentFixture<CalendarioTributarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioTributarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioTributarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
