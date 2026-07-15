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
   * AUFGABE: Ruft den neuen Backend-Endpoint auf, der einen Task
   * auf done = true setzt, und gibt den aktualisierten Task zurueck.
   *
   * Tipp: Passend zum Backend ein PATCH auf `${this.baseUrl}/${id}/complete`.
   *       Ein PATCH ohne Body: this.http.patch<Task>(url, {})
   */
  completeTask(id: number): Observable<Task> {
    // TODO: HTTP-Aufruf implementieren und das Ergebnis (Observable<Task>) zurueckgeben.
    throw new Error('TODO: completeTask() implementieren');
  }
}
