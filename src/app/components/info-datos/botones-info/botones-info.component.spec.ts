import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesInfoComponent } from './botones-info.component';

describe('BotonesInfoComponent', () => {
  let component: BotonesInfoComponent;
  let fixture: ComponentFixture<BotonesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
