import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

/**
 * Kapselt die HTTP-Aufrufe an das Spring-Boot-Backend (/api/tasks).
 */
@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api/tasks';

  /**
   * Laedt alle Tasks vom Backend. (funktioniert bereits)
   */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  /**
   * AUFGABE: Den Backend-Endpoint aufrufen, der einen Task als erledigt
   * markiert, und das Ergebnis als Observable<Task> zurueckgeben.
   */
  completeTask(id: number): Observable<Task> {
    // TODO: HTTP-Aufruf implementieren.
    throw new Error('TODO: completeTask() implementieren');
  }
}
