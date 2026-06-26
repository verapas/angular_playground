import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Card {
  title: string;
  description: string;
  icon: string;
  color: string;
  route: string;
  tag: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly cards: Card[] = [
    {
      title: 'Template-driven Forms',
      description: 'Formulare direkt im HTML mit ngModel — einfach & klassisch.',
      icon: '📝',
      color: '#3b82f6',
      route: '/template-forms',
      tag: 'FormsModule',
    },
    {
      title: 'Reactive Forms',
      description: 'FormGroup & FormControl — typsicher, testbar, reaktiv.',
      icon: '⚡',
      color: '#f59e0b',
      route: '/reactive-forms',
      tag: 'ReactiveFormsModule',
    },
    {
      title: 'Signal Forms',
      description: 'Die neue Art in Angular 21 — vollständig signal-basiert.',
      icon: '🔮',
      color: '#7c3aed',
      route: '/signal-forms',
      tag: 'Angular 21 · Experimental',
    },
    {
      title: 'Task List',
      description: 'Eine einfache Aufgabenliste mit Angular.',
      icon: '📋',
      color: '#10b981',
      route: '/task-list',
      tag: 'Angular 21',
    },
  ];
}
