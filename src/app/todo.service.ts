import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks = new BehaviorSubject<Task[]>(this.loadTasks()); // Task List
  tasks$ = this.tasks.asObservable(); //Observable to track changes

  constructor() { }

  addTask(title: string) {
    const currentTasks = this.tasks.value;
    const newTask: Task = {
      id: Date.now(), // Exclusive ID
      title,
      completed: false,
    };
    const updatedTasks = [...currentTasks, newTask];
    this.tasks.next(updatedTasks); // Update List
    this.saveTasks(updatedTasks); // Save in LocalStorage
  }

  toggleTaskCompletion(id: number) {
    const currentTasks = this.tasks.value.map((task) =>
    task.id == id ? { ...task, completed: !task.completed } : task 
    );
    this.tasks.next(currentTasks);
    this.saveTasks(currentTasks); // Save in LocalStorage
  }

  removeTask(id: number) {
    const currentTasks = this.tasks.value.filter((task) => task.id !== id);
    this.tasks.next(currentTasks);
    this.saveTasks(currentTasks); // Save in LocalStorage

  }

  private loadTasks(): Task[] {
    if (typeof localStorage !== 'undefined') { // Verifica se localStorage está disponível
      const tasksJson = localStorage.getItem('tasks');
      return tasksJson ? JSON.parse(tasksJson) : [];
    }
    return []; // Retorna um array vazio como fallback
  }
  
  private saveTasks(tasks: Task[]) {
    if (typeof localStorage !== 'undefined') { // Verifica se localStorage está disponível
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  
}
