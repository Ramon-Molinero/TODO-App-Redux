import { createAction, props } from "@ngrx/store";
import { Actions } from "../models/actions.enum";


export const crear = createAction( Actions.CREAR, props<{ texto:string }>() );