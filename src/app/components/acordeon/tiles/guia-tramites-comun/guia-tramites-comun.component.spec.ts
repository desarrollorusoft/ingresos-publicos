import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaTramitesComunComponent } from './guia-tramites-comun.component';

describe('GuiaTramitesComunComponent', () => {
  let component: GuiaTramitesComunComponent;
  let fixture: ComponentFixture<GuiaTramitesComunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaTramitesComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaTramitesComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
