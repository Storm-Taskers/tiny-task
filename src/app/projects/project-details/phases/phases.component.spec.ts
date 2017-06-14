import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesComponent } from './phases.component';

describe('PhasesComponent', () => {
  let component: PhasesComponent;
  let fixture: ComponentFixture<PhasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
