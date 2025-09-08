import { Component, signal } from '@angular/core';
import { TaskComponent } from '../task-component/task-component';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-root',
  imports: [TaskComponent,AddTask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homework-01');
}
