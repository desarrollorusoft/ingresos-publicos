import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDatosComponent } from './info-datos.component';

describe('InfoDatosComponent', () => {
  let component: InfoDatosComponent;
  let fixture: ComponentFixture<InfoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
