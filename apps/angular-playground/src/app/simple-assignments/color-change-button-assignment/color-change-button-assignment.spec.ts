import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangeButtonAssignment } from './color-change-button-assignment';

describe('ColorChangeButtonAssignment', () => {
  let component: ColorChangeButtonAssignment;
  let fixture: ComponentFixture<ColorChangeButtonAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorChangeButtonAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorChangeButtonAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
