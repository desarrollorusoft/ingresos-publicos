import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUtilesComponent } from './datos-utiles.component';

describe('DatosUtilesComponent', () => {
  let component: DatosUtilesComponent;
  let fixture: ComponentFixture<DatosUtilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUtilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
