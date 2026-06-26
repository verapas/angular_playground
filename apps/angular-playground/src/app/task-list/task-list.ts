import {Component, signal, ChangeDetectionStrategy} from '@angular/core';
import {TaskListInterface} from './task-list.interface';
import {MatList, MatListItem, MatListItemTitle} from '@angular/material/list';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  imports: [
    MatList,
    MatListItem,
    MatCheckbox,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatIcon,
    MatListItemTitle
  ],
  templateUrl: './task-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  styleUrl: './task-list.scss'
})
export class TaskList {

  protected tasks = signal<TaskListInterface[]>([
    {
      id: 1,
      title: 'Galaktische Mathe-Aufgaben',
      description: 'Löse Darth Vaders Mathe-Aufgaben',
      done: false
    },
    {
      id: 2,
      title: 'Tägliches',
      description: 'Geh schlafen',
      done: false
    },
    {
      id: 3,
      title: 'Schöne aufgabe Aufgabe',
      description: 'Luca küssen',
      done: false
    }
  ])


  toggle(id: number) {
    this.tasks.update(tasks =>
      tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }




}
