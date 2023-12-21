import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public handleHttpError(error: any, endpoint: string): Observable<never> {
    if (error === 'TimeoutError') {
      console.error('Timeout Error', endpoint);
      return EMPTY;
    }

    if (error.status === 500) {
      console.error('Internal Server Error', endpoint);
      return EMPTY;
    }

    if (error.status === 0) {
      console.error('Unknown Connection Error', endpoint);
      return EMPTY;
    }

    return EMPTY;
  }
}
