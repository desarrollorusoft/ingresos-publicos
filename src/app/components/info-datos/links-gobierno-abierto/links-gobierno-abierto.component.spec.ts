import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksGobiernoAbiertoComponent } from './links-gobierno-abierto.component';

describe('LinksGobiernoAbiertoComponent', () => {
  let component: LinksGobiernoAbiertoComponent;
  let fixture: ComponentFixture<LinksGobiernoAbiertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksGobiernoAbiertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksGobiernoAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
