import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioMvComponent } from './calendario-mv.component';

describe('CalendarioMvComponent', () => {
  let component: CalendarioMvComponent;
  let fixture: ComponentFixture<CalendarioMvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioMvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
