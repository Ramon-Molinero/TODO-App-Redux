import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/store/actions/todo.actions';
import { AppState } from 'src/app/store/models/state.interface';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css'],
})
export class TodosPageComponent implements OnInit {

  completado: boolean = false;

  constructor( private store: Store<AppState>) {}

  ngOnInit(): void {}

  toogleAll(){
    this.completado = !this.completado;
    this.store.dispatch( actions.toogleAll({ completado: this.completado }));
  }
}
