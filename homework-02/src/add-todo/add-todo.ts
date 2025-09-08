import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo-component',
  imports: [],
  templateUrl: './add-todo-component.html',
  styleUrl: './add-todo-component.css'
})
export class AddTodo {
    constructor(){}

    ngOnInit(): void{
      console.log('viewing todo list')
    }
}
