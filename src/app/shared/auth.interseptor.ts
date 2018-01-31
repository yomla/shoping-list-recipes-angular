import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class AuthInterseptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', request);
    // const copiedReq = request.clone({headers: request.headers.set('', '')});
    const copiedRequest = request.clone({params: request.params.set('auth', this.authService.getToken())});
    return next.handle(copiedRequest);
  }
}
