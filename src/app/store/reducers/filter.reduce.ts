import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltros } from '../actions/filter.action';

export const initialState: filtrosValidos = 'todos';

const _filterReducer = createReducer< filtrosValidos, Action>(
  initialState,
  on( setFiltros, (state , { filtro } ) => filtro ),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
