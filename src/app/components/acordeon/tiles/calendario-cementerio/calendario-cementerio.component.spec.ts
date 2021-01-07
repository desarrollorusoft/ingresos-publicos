import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCementerioComponent } from './calendario-cementerio.component';

describe('CalendarioCementerioComponent', () => {
  let component: CalendarioCementerioComponent;
  let fixture: ComponentFixture<CalendarioCementerioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioCementerioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioCementerioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
