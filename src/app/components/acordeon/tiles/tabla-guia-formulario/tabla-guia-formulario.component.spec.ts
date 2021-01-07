import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGuiaFormularioComponent } from './tabla-guia-formulario.component';

describe('TablaGuiaFormularioComponent', () => {
  let component: TablaGuiaFormularioComponent;
  let fixture: ComponentFixture<TablaGuiaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaGuiaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaGuiaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
