import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL_TOKEN} from './config';

export interface IRes {
  data: any;
  error?: string;
}
@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: `${this.baseUrl}/${req.url}`,
      headers: req.headers.set('Content-Type', 'application/json')
    });
    return next.handle(request);
  }

}
