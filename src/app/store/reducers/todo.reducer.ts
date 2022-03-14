import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/todos/models/todo.model";
import * as actions from "../actions/todo.actions";

export const initialState: Todo[] = [
  new Todo('Salvar el mundo')
];

const _todoReducer = createReducer(
  initialState,
  // on( actions.crear, (state, props) => [ ...state, new Todo( props.texto ) ] ),
  // Destructuración props, extraemos el texto
  on(actions.crear, ( state, { texto } ) => [ ...state, new Todo( texto ) ] ),
);

export function todoReducer( state, action ){
    return _todoReducer(state, action);
}