import { Injectable } from '@angular/core';
import { Fighter } from '../models/fighter.model';
import { Observable } from 'rxjs';
import { ApiService } from '../../common/api.service';
import { HTTPMethodTypes } from '../../common/types/api.types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FighterApiService {

  constructor(private readonly apiService: ApiService) { }

  public getAll$(): Observable<Fighter[]> {
    return this.apiService.request$(HTTPMethodTypes.Get, environment.endpoints.fighter);
  }

  public update$(fighter?: Partial<Fighter>): Observable<Fighter> {
    return this.apiService.request$(HTTPMethodTypes.Put, `${environment.endpoints.fighter}/${fighter!.id}`, {
      body: fighter,
    });
  }

  public add$(fighter: Fighter): Observable<Fighter> {
    return this.apiService.request$(HTTPMethodTypes.Post, environment.endpoints.fighter, {
      body: fighter,
    });
  }

  public delete$(id: number): Observable<void> {
    return this.apiService.request$(HTTPMethodTypes.Delete, `${environment.endpoints.fighter}/${id}`);
  }
}
