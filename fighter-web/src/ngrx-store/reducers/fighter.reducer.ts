import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Fighter } from "../../app/core/models/fighter.model";
import { createReducer, on } from "@ngrx/store";
import { fighterAdd, fighterDelete, fighterLoadSuccess, fighterUpdate, fighterUpdateSuccess } from "../actions/fighter.action";

export const fighterAdapter: EntityAdapter<Fighter> = createEntityAdapter<Fighter>({
  selectId: fighter => fighter.id,
  sortComparer: false,
});

export const initialFighterState = fighterAdapter.getInitialState({
  loadSuccess: false,
});

export const fighterReducer = createReducer(
  initialFighterState,
  on(fighterLoadSuccess, (state, { fighters }) => {
    return fighterAdapter.setAll(fighters, { ...state, loadSuccess: true });
  }),
  on(fighterAdd, (state, { fighter }) => {
    return fighterAdapter.addOne(fighter, state);
  }),
  on(fighterUpdate, (state, { update }) => {
    return fighterAdapter.updateOne(update, state);
  }),
  on(fighterUpdateSuccess, (state) => {
    return state;
  }),
  on(fighterDelete, (state, { id }) => {
    return fighterAdapter.removeOne(id, state);
  }),
)

export const {
  selectEntities: _selectFightersEntities,
  selectAll: _selectAllFighters,
  selectTotal: _selectFightersTotal,
} = fighterAdapter.getSelectors();

