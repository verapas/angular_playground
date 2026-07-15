import {Component, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';

export type Color = 'red' | 'green' | 'blue' | 'yellow';
const COLORS: Color[] = ['red', 'green', 'blue', 'yellow'];

@Component({
  selector: 'color-change-button-assignment',
  imports: [
    MatButton
  ],
  templateUrl: './color-change-button-assignment.html',
  styleUrl: './color-change-button-assignment.scss',
})
export class ColorChangeButtonAssignment {

  color = signal<Color>('red');

  changeColor(): void {
    this.color.update(
      color => COLORS[(COLORS.indexOf(color) + 1) % COLORS.length]
    )
  }
}
