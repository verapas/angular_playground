import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveInputNameAssignment } from './live-input-name-assignment';

describe('LiveInputNameAssignment', () => {
  let component: LiveInputNameAssignment;
  let fixture: ComponentFixture<LiveInputNameAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveInputNameAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveInputNameAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
