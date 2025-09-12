import { AddTodoComponent } from '../add-todo/add-todo';
import { Routes } from '@angular/router';
import { ViewTodosComponent} from '../view-todos/view-todos';


export const routes: Routes = [
    { path:'', component: ViewTodosComponent},
    { path:'addTodo', component: AddTodoComponent}
];
