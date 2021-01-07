import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioComunComponent } from './calendario-comun.component';

describe('CalendarioComunComponent', () => {
  let component: CalendarioComunComponent;
  let fixture: ComponentFixture<CalendarioComunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
