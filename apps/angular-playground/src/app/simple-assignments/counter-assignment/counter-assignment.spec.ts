import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterAssignment } from './counter-assignment';

describe('CounterAssignment', () => {
  let component: CounterAssignment;
  let fixture: ComponentFixture<CounterAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterAssignment]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
