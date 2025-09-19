import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoService, Todo, TodoStatus } from './../services/todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.css']
})
export class AddTodoComponent {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      status: ['pending', Validators.required]
    });
  }

  get title() { return this.form.get('title'); }
  get description() { return this.form.get('description'); }
  get status() { return this.form.get('status'); }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) return;

    const todo: Todo = {
      id: Date.now(),
      title: this.form.value.title,
      description: this.form.value.description,
      status: this.form.value.status as TodoStatus
    };

    this.todoService.addTodo(todo);

    this.form.reset({ status: 'pending' });
    this.submitted = false;

    this.router.navigate(['/']);
  }
}