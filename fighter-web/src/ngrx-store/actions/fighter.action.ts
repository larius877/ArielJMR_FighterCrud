import { createAction, props } from "@ngrx/store";
import { Fighter } from "../../app/core/models/fighter.model";
import { Update } from "@ngrx/entity";


export const fighterLoad = createAction('[Fighter] Load');
export const fighterLoadSuccess = createAction('[Fighter] Load Success', props<{ fighters: Fighter[] }>());

export const fighterAdd = createAction('[Fighter] Add', props<{ fighter: Fighter }>());
export const fighterAddSuccess = createAction('[Fighter] Add Success');
export const fighterUpdate = createAction('[Fighter] Update', props<{ update: Update<Fighter> }>());
export const fighterUpdateSuccess = createAction('[Fighter] Update Success');
export const fighterDelete = createAction('[Fighter] Delete', props<{ id: number }>());
export const fighterDeleteSuccess = createAction('[Fighter] Delete Success');
