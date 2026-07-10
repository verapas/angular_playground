import {Component, input, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'counter-assignment',
  imports: [
    MatButton
  ],
  templateUrl: './counter-assignment.html',
  standalone: true,
  styleUrl: './counter-assignment.scss'
})
export class CounterAssignment {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }

}
