import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/todos/models/todo.model";
import * as actions from "../actions/todo.actions";

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Pedirle a Tony un traje'),
  new Todo('Pedir el escudo del Capitán América'),
];

const _todoReducer = createReducer(
  initialState,
  // on( actions.crear, (state, props) => [ ...state, new Todo( props.texto ) ] ),
  // Destructuración props, extraemos el texto
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.stateTodo, (state, { id }) => {
    return state.map( todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else return todo;
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          texto: texto
        }
      } else return todo;
    })
  }),
  on(actions.borrar, (state, {id}) => 
    state.filter(todo => todo.id !== id)
  ),
  on(actions.toogleAll, (state, { completado }) => 
    state.map( todo => {
      return {
        ...todo,
        completado: completado
      }
    })
  ),
  on( actions.borrarCompletadas, (state) => state.filter( todo => !todo.completado))
);

export function todoReducer( state, action ){
    return _todoReducer(state, action);
}