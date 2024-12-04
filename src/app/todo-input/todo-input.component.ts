import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
  standalone: true
})
export class TodoInputComponent {
  taskTitle = ''; // Title of the New Task!

  constructor(private todoService: TodoService) { }
  
  addTask() {
    if (this.taskTitle.trim()) {
      this.todoService.addTask(this.taskTitle.trim());
      this.taskTitle = ''; // Clear the input field
    }
  }

}
