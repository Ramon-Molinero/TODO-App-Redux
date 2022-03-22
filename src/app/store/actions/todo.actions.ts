import { createAction, props } from "@ngrx/store";
import { TodoActions } from "../models/actions.enum";


export const crear = createAction( TodoActions.CREAR, props<{ texto:string }>() );
export const stateTodo = createAction(TodoActions.STATETAREA, props<{ id: number }>());
export const editar = createAction( TodoActions.EDITAR, props<{ id: number, texto: string }>() );
export const borrar = createAction( TodoActions.BORRAR,  props<{ id: number }>() );
export const toogleAll = createAction(TodoActions.TOOGLEALL, props<{ completado: boolean }>());
export const borrarCompletadas = createAction( TodoActions.BORRARCOMPLETADAS);