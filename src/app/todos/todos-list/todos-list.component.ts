import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/state.interface';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todos = todos);
    console.log(this.todos)
  }

}
