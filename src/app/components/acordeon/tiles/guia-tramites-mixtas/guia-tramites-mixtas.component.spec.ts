import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaTramitesMixtasComponent } from './guia-tramites-mixtas.component';

describe('GuiaTramitesMixtasComponent', () => {
  let component: GuiaTramitesMixtasComponent;
  let fixture: ComponentFixture<GuiaTramitesMixtasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaTramitesMixtasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaTramitesMixtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
