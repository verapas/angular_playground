import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentExpensesTracker } from './assignment-expenses-tracker';

describe('AssignmentExpensesTracker', () => {
  let component: AssignmentExpensesTracker;
  let fixture: ComponentFixture<AssignmentExpensesTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentExpensesTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentExpensesTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
