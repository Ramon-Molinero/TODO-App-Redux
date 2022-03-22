import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "src/app/todos/models/todo.model";
import { todoReducer } from '../reducers/todo.reducer';
import { filtrosValidos } from '../actions/filter.action';
import { filterReducer } from "../reducers/filter.reduce";


export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer
}