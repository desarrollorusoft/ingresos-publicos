import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaFiscalComponent } from './cultura-fiscal.component';

describe('CulturaFiscalComponent', () => {
  let component: CulturaFiscalComponent;
  let fixture: ComponentFixture<CulturaFiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaFiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
