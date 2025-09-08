import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddTask } from '../add-task/add-task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-component',
  imports: [CommonModule, AddTask, FormsModule],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css'
})
export class TaskComponent {
  tasks:TaskInterafe[] = [
    { task: "Go for a walk", isCompleted: false },
    { task: "Wash the Dog", isCompleted: false },
    { task: "Clean the house", isCompleted: true }
  ];

  onTaskAdded(newTask: string){
    this.tasks.push(({task: newTask, isCompleted:false}))
  }
}
interface TaskInterafe{
  task: string,
  isCompleted:boolean
}

