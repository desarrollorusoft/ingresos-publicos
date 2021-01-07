import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinNormativaComponent } from './sin-normativa.component';

describe('SinNormativaComponent', () => {
  let component: SinNormativaComponent;
  let fixture: ComponentFixture<SinNormativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinNormativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
