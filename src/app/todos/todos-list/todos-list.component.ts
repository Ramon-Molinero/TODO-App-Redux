import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/store/actions/filter.action';
import * as actions from 'src/app/store/actions/todo.actions';
import { AppState } from 'src/app/store/models/state.interface';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtroactual: filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(todos => this.todos = todos);
    // console.log(this.todos)
    this.store.subscribe(stage => {
      this.todos = stage.todos;
      this.filtroactual = stage.filtro
    })
  }

  

}
