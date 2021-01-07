import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesContainerComponent } from './novedades-container.component';

describe('NovedadesContainerComponent', () => {
  let component: NovedadesContainerComponent;
  let fixture: ComponentFixture<NovedadesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovedadesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
