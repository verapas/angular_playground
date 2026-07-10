import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'assignment-card',
  templateUrl: './assignment-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './assignment-card.scss',
  standalone: true
})
export class AssignmentCard {}
