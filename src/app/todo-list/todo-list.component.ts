import { Component } from '@angular/core';
import { TodoService, Task } from '../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: true,
})
export class TodoListComponent {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleTaskCompletion(id: number) {
    this.todoService.toggleTaskCompletion(id);
  }

  removeTask(id: number) {
    this.todoService.removeTask(id);
  }
}
