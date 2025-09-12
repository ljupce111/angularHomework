import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  constructor(private router: Router) { }

  goToView() {
    this.router.navigate(['/']);
  }

  goToAdd() {
    this.router.navigate(['/addTodo']);
  }
}
