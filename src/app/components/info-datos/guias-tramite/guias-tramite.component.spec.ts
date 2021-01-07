import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasTramiteComponent } from './guias-tramite.component';

describe('GuiasTramiteComponent', () => {
  let component: GuiasTramiteComponent;
  let fixture: ComponentFixture<GuiasTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiasTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
