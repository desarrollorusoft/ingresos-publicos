import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaActivaComponent } from './transferencia-activa.component';

describe('TransferenciaActivaComponent', () => {
  let component: TransferenciaActivaComponent;
  let fixture: ComponentFixture<TransferenciaActivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaActivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaActivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
