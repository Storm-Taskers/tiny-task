import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskComponent } from './user-task.component';

describe('UserTaskComponent', () => {
  let component: UserTaskComponent;
  let fixture: ComponentFixture<UserTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
