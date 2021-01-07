import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaTributariaComponent } from './normativa-tributaria.component';

describe('NormativaTributariaComponent', () => {
  let component: NormativaTributariaComponent;
  let fixture: ComponentFixture<NormativaTributariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativaTributariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativaTributariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
