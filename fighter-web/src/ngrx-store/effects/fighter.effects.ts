import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FighterApiService } from "../../app/core/services/fighter-api.service";
import * as FighterActions from '../../ngrx-store/actions/fighter.action';
import { catchError, exhaustMap, map } from "rxjs";
import { ErrorService } from "../../app/common/error.service";
import { environment } from "../../environments/environment";


@Injectable()
export class FighterEffects {
  public readonly loadFighters$ = createEffect(() => this.actions$.pipe(
    ofType(FighterActions.fighterLoad),
    exhaustMap(() => this.fighterApiService.getAll$().pipe(
      map(fighters => FighterActions.fighterLoadSuccess({ fighters })),
      catchError(error => this.errorService.handleHttpError(error, environment.endpoints.fighter))
    )),
  ));

  public readonly updateFighter$ = createEffect(() => this.actions$.pipe(
    ofType(FighterActions.fighterUpdate),
    exhaustMap(({ update }) => this.fighterApiService.update$(update.changes).pipe(
      map(() => FighterActions.fighterUpdateSuccess()),
      catchError(error => this.errorService.handleHttpError(error, environment.endpoints.fighter))
    ))
  ));

  public readonly addFighter$ = createEffect(() => this.actions$.pipe(
    ofType(FighterActions.fighterAdd),
    exhaustMap(({ fighter }) => this.fighterApiService.add$(fighter).pipe(
      map(() => FighterActions.fighterAddSuccess()),
      catchError(error => this.errorService.handleHttpError(error, environment.endpoints.fighter))
    ))
  ));

  public readonly deleteFighter$ = createEffect(() => this.actions$.pipe(
    ofType(FighterActions.fighterDelete),
    exhaustMap(({ id }) => this.fighterApiService.delete$(id).pipe(
      map(() => FighterActions.fighterDeleteSuccess()),
      catchError(error => this.errorService.handleHttpError(error, environment.endpoints.fighter))
    ))
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly fighterApiService: FighterApiService,
    private readonly errorService: ErrorService,
  ) { }

}
