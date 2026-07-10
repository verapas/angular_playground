import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AssignmentCard } from './ui-components/assignment-card/assignment-card';
import { AssignmentTitle } from './ui-components/assignment-title/assignment-title';
import { AssignmentContent } from './ui-components/assignment-content/assignment-content';
import {CounterAssignment} from './counter-assignment/counter-assignment';
import {LiveInputNameAssignment} from './live-input-name-assignment/live-input-name-assignment';

@Component({
  selector: 'simple-assignments',
  imports: [AssignmentCard, AssignmentTitle, AssignmentContent, CounterAssignment, LiveInputNameAssignment],
  templateUrl: './simple-assignments.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './simple-assignments.scss',
  standalone: true
})
export class SimpleAssignments {}
