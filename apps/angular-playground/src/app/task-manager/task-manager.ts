import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TaskControllerService, TaskDto } from '../api';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-task-manager',
  imports: [
    MatButton
  ],
  templateUrl: './task-manager.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  styleUrl: './task-manager.scss',
})
export class TaskManager {
  // Der generierte OpenAPI-Client (ersetzt den handgeschriebenen HTTP-Service).
  private readonly api = inject(TaskControllerService);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly tasks = signal<TaskDto[]>([]);
  protected readonly errorMessage = signal<string | null>(null);

  constructor() {
    // HTTP nur im Browser ausfuehren (nicht waehrend Server-Side-Rendering).
    if (isPlatformBrowser(this.platformId)) {
      this.loadTasks();
    }
  }

  /**
   * Laedt die Task-Liste ueber den generierten API-Client. (funktioniert bereits)
   * Dient als Vorlage fuer completeTask().
   */
  protected loadTasks(): void {
    // this.errorMessage.set(null);
    this.api.getAllTasks().subscribe({
      next: (tasks) => this.tasks.set(tasks),
      error: () =>
        this.errorMessage.set(
          'Tasks konnten nicht geladen werden. Laeuft das Backend auf http://localhost:8080 ?'
        ),
    });
  }

  /**
   * AUFGABE: Den Task ueber den generierten API-Client (this.api) als erledigt
   * markieren und danach die Liste neu laden. Orientiere dich an loadTasks().
   */
  protected completeTask(id: number | undefined): void {
    if (id === undefined) {
      return;
    }
    this.api.markAsDone(id);
    this.loadTasks();

  }
}
