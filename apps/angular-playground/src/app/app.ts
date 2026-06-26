import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly navItems: NavItem[] = [
    { label: 'Dashboard', icon: '🏠', route: '/' },
    { label: 'Template Forms', icon: '📝', route: '/template-forms' },
    { label: 'Reactive Forms', icon: '⚡', route: '/reactive-forms' },
    { label: 'Signal Forms', icon: '🔮', route: '/signal-forms' },
    { label: 'Task List', icon: '📋', route: '/task-list' },
  ];
}
