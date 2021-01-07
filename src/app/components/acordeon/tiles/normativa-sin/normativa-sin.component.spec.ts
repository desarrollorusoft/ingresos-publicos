import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaSinComponent } from './normativa-sin.component';

describe('NormativaSinComponent', () => {
  let component: NormativaSinComponent;
  let fixture: ComponentFixture<NormativaSinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativaSinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativaSinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
