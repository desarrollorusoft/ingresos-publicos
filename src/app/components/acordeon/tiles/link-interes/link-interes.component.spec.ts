import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkInteresComponent } from './link-interes.component';

describe('LinkInteresComponent', () => {
  let component: LinkInteresComponent;
  let fixture: ComponentFixture<LinkInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
