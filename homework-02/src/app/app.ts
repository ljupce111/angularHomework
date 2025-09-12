import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from '../components/navigation/navigation';
import { AddTodoComponent } from '../add-todo/add-todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navigation,AddTodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('homework-02');
  
}
