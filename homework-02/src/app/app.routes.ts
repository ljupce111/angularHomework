import { AddTodo } from '../add-todo/add-todo';
import { Routes } from '@angular/router';
import { ViewTodos } from '../view-todos/view-todos';


export const routes: Routes = [
    { path:'', component: ViewTodos},
    { path:'addTodo', component: AddTodo}
];
