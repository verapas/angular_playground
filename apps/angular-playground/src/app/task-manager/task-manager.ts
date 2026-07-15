import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task-manager',
  imports: [],
  templateUrl: './task-manager.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  styleUrl: './task-manager.scss',
})
export class TaskManager {
  private readonly taskService = inject(TaskService);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly tasks = signal<Task[]>([]);
  protected readonly errorMessage = signal<string | null>(null);

  constructor() {
    // HTTP nur im Browser ausfuehren (nicht waehrend Server-Side-Rendering).
    if (isPlatformBrowser(this.platformId)) {
      this.loadTasks();
    }
  }

  /**
   * Laedt die Task-Liste vom Backend in das Signal. (funktioniert bereits)
   */
  protected loadTasks(): void {
    this.errorMessage.set(null);
    this.taskService.getTasks().subscribe({
      next: (tasks) => this.tasks.set(tasks),
      error: () =>
        this.errorMessage.set(
          'Tasks konnten nicht geladen werden. Laeuft das Backend auf http://localhost:8080 ?'
        ),
    });
  }

  /**
   * AUFGABE: Markiert einen Task als erledigt.
   *
   * Vorgehen (Tipps):
   *   1. this.taskService.completeTask(id) aufrufen und subscriben
   *   2. Nach Erfolg die Liste neu laden -> this.loadTasks()
   */
  protected completeTask(id: number): void {
    // TODO: completeTask implementieren.
  }
}
