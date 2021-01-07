import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoherenciaFiscalComponent } from './coherencia-fiscal.component';

describe('CoherenciaFiscalComponent', () => {
  let component: CoherenciaFiscalComponent;
  let fixture: ComponentFixture<CoherenciaFiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoherenciaFiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoherenciaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
