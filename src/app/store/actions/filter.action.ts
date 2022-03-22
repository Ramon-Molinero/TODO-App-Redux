import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltros = createAction('[FILTER] set filtros', props<{ filtro: filtrosValidos }>());
