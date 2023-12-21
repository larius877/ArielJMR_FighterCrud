import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTPMethodTypes, HTTPOptions } from './types/api.types';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private readonly http: HttpClient) { }

  request$(method: HTTPMethodTypes, url: string, options?: HTTPOptions) {
    try {
      Boolean(new URL(url));
    } catch (e) {
      return throwError(() => 'Invalid URL');
    }

    return this.http.request(method, url, options).pipe(
      catchError(error => error)
    );
  }
}
