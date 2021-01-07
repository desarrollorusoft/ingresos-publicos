import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaArbaComponent } from './normativa-arba.component';

describe('NormativaArbaComponent', () => {
  let component: NormativaArbaComponent;
  let fixture: ComponentFixture<NormativaArbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativaArbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativaArbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
