import { createAction, props } from "@ngrx/store";
import { Actions } from "../models/actions.enum";


export const crear = createAction( Actions.CREAR, props<{ texto:string }>() );
export const stateTodo = createAction(Actions.STATETAREA, props<{ id: number }>());
export const editar = createAction( Actions.EDITAR, props<{ id: number, texto: string }>() );
export const borrar = createAction( Actions.BORRAR,  props<{ id: number }>() );