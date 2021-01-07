import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaComunComponent } from './normativa-comun.component';

describe('NormativaComunComponent', () => {
  let component: NormativaComunComponent;
  let fixture: ComponentFixture<NormativaComunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativaComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativaComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
