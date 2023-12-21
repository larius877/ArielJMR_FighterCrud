import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FighterState } from '../../../ngrx-store/types/fighter.types';
import { Store } from '@ngrx/store';
import { selectAllFighterss, selectFightersState } from '../../../ngrx-store/selectors/fighter.selector';
import { fighterLoad, fighterAdd, fighterDelete, fighterUpdate } from '../../../ngrx-store/actions/fighter.action';
import { Fighter } from '../models/fighter.model';

@Injectable({
  providedIn: 'root'
})
export class FighterStateService {
  public readonly fighterState$: Observable<FighterState> = this.store.select(selectFightersState);
  public readonly allFighter$: Observable<Fighter[]> = this.store.select(selectAllFighterss);

  constructor(private readonly store: Store<FighterState>) { }

  public loadFighters(): void {
    this.store.dispatch(fighterLoad());
  }

  public addFighter(fighter: Fighter): void {
    this.store.dispatch(fighterAdd({ fighter }));
  }

  public updateFighter(fighter: Fighter): void {
    this.store.dispatch(fighterUpdate({ update: {id: fighter.id, changes: fighter} }));
  }

  public deleteFighter(id: number): void {
    this.store.dispatch(fighterDelete({ id }));
  }

}
