import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export enum HTTPMethodTypes {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export interface HTTPOptions {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body' | 'response';
  params?:
    | HttpParams
    | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
  responseType?: 'json';
  reportProgress?: boolean;
  withCredentials?: boolean;
}
