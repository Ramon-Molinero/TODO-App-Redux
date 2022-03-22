import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/store/actions/filter.action';
import * as todoActions from 'src/app/store/actions/todo.actions';
import { AppState } from '../../store/models/state.interface';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css']
})
export class TodosFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  allFilters: actions.filtrosValidos[] = ['todos', 'pendientes', 'completados'];

  tareasPendientes: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro')
    //   .subscribe( filtro => this.filtroActual = filtro )

    this.store.subscribe( state => {
      this.filtroActual = state.filtro
      this.tareasPendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    this.store.dispatch( actions.setFiltros({ filtro: filtro }))
  }

  deleteComplete(){
    this.store.dispatch( todoActions.borrarCompletadas())
  }

}
