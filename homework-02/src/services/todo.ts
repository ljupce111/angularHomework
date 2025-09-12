import { Injectable, signal } from '@angular/core';
export type TodoStatus = 'pending' | 'in-progress' | 'completed';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = signal<Todo[]>([]);

  constructor() {
    this.todos.set([
      {
        id: 1,
        title: 'Buy groceries',
        description: 'Milk, Eggs, Bread',
        status: 'pending'
      },
      {
        id: 2,
        title: 'Study Angular',
        description: 'Learn signals and components',
        status: 'in-progress'
      },
      {
        id: 3,
        title: 'Workout',
        description: 'Gym session at 6 PM',
        status: 'completed'
      }
    ]);
  }

  addTodo(todo: Todo) {
    this.todos.update(todos => [...todos, todo]);
  }

  changeStatus(id: number, status: TodoStatus) {
    this.todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, status } : t)
    );
  }

  deleteTodo(id: number) {
    this.todos.update(todos => todos.filter(t => t.id !== id));
  }
}