import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { filter, take } from 'rxjs';
import { FighterStateService } from '../core/services/fighter-state.service';

@Injectable({
  providedIn: 'root'
})
export class FighterResolverGuard implements CanActivate {
  constructor(private readonly fighterStateService: FighterStateService) { }

  canActivate(): boolean {
    this.fighterStateService.fighterState$
      .pipe(
        // Solo se ejecuta la carga del los fighters si la carga no está marcada como loadSuccess.
        // Esto es para evitar llamar al servicio nuevamente si los fighters ya se encuentran en el state.
        filter(fighterState => !fighterState.loadSuccess),
        // Se toma solo en evento del emitido para evitar el unsubscribe del observable.
        take(1)
      )
      .subscribe(() => {
        // Dispatch de la acción de carga de fighters.
        this.fighterStateService.loadFighters();
      });

    return true;
  }
}
