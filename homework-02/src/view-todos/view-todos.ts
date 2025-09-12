import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService, Todo, TodoStatus } from '../services/todo';

@Component({
  selector: 'app-view-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-todos.html',
  styleUrls: ['./view-todos.css']
})
export class ViewTodosComponent {
  totalCount = computed(() => this.todoService.todos().length);

  constructor(private todoService: TodoService) {}

  get todos(): Todo[] {
    return this.todoService.todos();
  }
  delete(id: number) {
    this.todoService.deleteTodo(id);
  }
  changeStatusFromEvent(todoId: number, event: Event) {
    const select = event.target as HTMLSelectElement;
    const status = select.value as TodoStatus;
    this.todoService.changeStatus(todoId, status);
  }
}