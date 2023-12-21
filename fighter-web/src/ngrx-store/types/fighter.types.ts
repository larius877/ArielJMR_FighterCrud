import { EntityState } from '@ngrx/entity';
import { Fighter } from '../../app/core/models/fighter.model';

export interface FighterState extends EntityState<Fighter> {
  loadSuccess: boolean;
}
