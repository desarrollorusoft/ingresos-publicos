import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosAbuelosComponent } from './cuentos-abuelos.component';

describe('CuentosAbuelosComponent', () => {
  let component: CuentosAbuelosComponent;
  let fixture: ComponentFixture<CuentosAbuelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentosAbuelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentosAbuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
