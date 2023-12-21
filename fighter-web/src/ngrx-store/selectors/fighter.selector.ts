import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FighterState } from "../types/fighter.types";
import { _selectAllFighters, _selectFightersEntities, _selectFightersTotal } from "../reducers/fighter.reducer";


/** Selecciona el objeto de state completo. */
export const selectFightersState = createFeatureSelector<FighterState>('fighters');

/** Selecciona y devuelve un Dictionary<T> con todas las entidades. */
export const selectFighterssEntities = createSelector(selectFightersState, _selectFightersEntities);

/** Selecciona y devuelve un Array<T> de todas las entidades. */
export const selectAllFighterss = createSelector(selectFightersState, _selectAllFighters);

/** Devuelve el número total de entidades en el state. */
export const selectFighterssTotal = createSelector(selectFightersState, _selectFightersTotal);
