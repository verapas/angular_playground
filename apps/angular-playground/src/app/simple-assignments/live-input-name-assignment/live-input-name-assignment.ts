import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'live-input-name-assignment',
  imports: [
    FormsModule
  ],
  templateUrl: './live-input-name-assignment.html',
  styleUrl: './live-input-name-assignment.scss',
})
export class LiveInputNameAssignment {
    name = signal('');



}
