import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo, TodoStatus } from './../services/todo'

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.css']
})
export class AddTodoComponent {
  title: string = '';
  description: string = '';
  status: TodoStatus = 'pending';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (!this.title.trim() || !this.description.trim()) return;

    const todo: Todo = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: this.status
    };

    this.todoService.addTodo(todo);

    this.title = '';
    this.description = '';
    this.status = 'pending';
  }
}